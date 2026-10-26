'use strict';
const byId=id=>document.getElementById(id),memories=giftMemories;
const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)');
const track=byId('roulette-track'),windowEl=byId('roulette-window'),openButton=byId('open-case'),dialog=byId('reward-dialog');
const storageKey='kitty-three-skin-gifts-v1',prizeIds=giftPrizes.map(p=>p.id);
let state=readState(),spinning=false,animation=null,selected=null,selectedIsPrize=false,previousFocus=null;
function readState(){try{return GiftState.normalize(JSON.parse(localStorage.getItem(storageKey)||'null'),prizeIds);}catch{return {openings:[]};}}
function storeState(next){try{localStorage.setItem(storageKey,JSON.stringify(next));state=next;return true;}catch{return false;}}
function randomIndex(length){if(globalThis.crypto?.getRandomValues){const value=new Uint32Array(1);crypto.getRandomValues(value);return Math.floor(value[0]/4294967296*length);}return Math.floor(Math.random()*length);}
function photoElement(memory){const img=document.createElement('img');img.src=memory.src;img.alt=memory.label;img.decoding='async';img.style.objectPosition=memory.position||'center';return img;}
function allPrizesReady(){return giftPrizes.length===3&&giftPrizes.every(p=>Boolean(p.image));}
function syncInterface(){
 const remaining=GiftState.remaining(state),pending=state.openings.find(e=>e.status==='reserved');
 byId('attempts-left').textContent=`${remaining} / 3`;byId('shelf-count').textContent=`${remaining} / 3`;
 byId('collection-count').textContent=`Открыто ${state.openings.filter(e=>e.status==='opened').length} из 3`;
 openButton.disabled=spinning||!allPrizesReady()||(!pending&&(remaining===0||!hasPromo()));
 byId('quick-spin').disabled=spinning||!allPrizesReady()||remaining===0;
 openButton.textContent=!hasPromo()?'Сначала активируй промокод ♡':spinning?'Твой подарок уже близко…':!allPrizesReady()?'Подарки скоро появятся ♡':pending?'Получить мой подарок ♡':remaining?`Открыть кейс · ${remaining} из 3`:'Все три подарка — твои ♡';
 if(!spinning)byId('spin-status').textContent=!allPrizesReady()?'Готовлю для тебя три скина. Открытия скоро станут доступны ♡':pending?'Одно открытие ждёт тебя. Твой подарок сохранился ♡':remaining?'В ленте — наши фотографии. В результате — твой скин-подарок ♡':'Все три подарка открыты. Их можно посмотреть ниже ♡';
 document.querySelectorAll('.memory-card').forEach(button=>button.disabled=spinning);
 renderPrizes();renderInventory();
}
function renderPrizes(){
 byId('prizes-grid').replaceChildren(...giftPrizes.map((prize,i)=>{
  const entry=state.openings.find(e=>e.id===prize.id),opened=entry?.status==='opened';
  const card=document.createElement(opened?'button':'div');card.className='prize-card'+(opened?' is-opened':'');if(opened){card.type='button';card.onclick=()=>showPrize(prize);card.setAttribute('aria-label',`Посмотреть подарок: ${prize.name}`);}
  if(prize.image){const img=document.createElement('img');img.src=prize.image;img.alt=prize.name;card.append(img);}else{const placeholder=document.createElement('div');placeholder.className='prize-placeholder';placeholder.textContent='♡';placeholder.setAttribute('aria-hidden','true');card.append(placeholder);}
  const title=document.createElement('strong');title.textContent=prize.name;
  const note=document.createElement('small');note.textContent=opened?'Твой подарок ♡':prize.image?`Подарок ${i+1} из 3`:'Скоро раскрою секрет';card.append(title,note);return card;
 }));
}
function showDialog(data,isPrize){
 dialog.classList.toggle('is-mystery',isPrize&&data.id==='skin-1');selected=data;selectedIsPrize=isPrize;previousFocus=document.activeElement;
 const img=byId('reward-image');img.src=isPrize?data.image:data.src;img.alt=isPrize?data.name:data.label;img.style.objectPosition=isPrize?'center':data.position||'center';
 byId('reward-title').textContent=isPrize?data.name:data.label;byId('reward-note').textContent=isPrize?(data.description||'Этот скин — твой подарок. С любовью к тебе ♡'):data.note;
 dialog.querySelector('.overline').textContent=isPrize?'ТВОЙ СКИН-ПОДАРОК ♡':'ИЗ НАШЕЙ ИСТОРИИ';
 const claimed=isPrize&&state.openings.find(e=>e.id===data.id)?.claimed;
 byId('claim-memory').hidden=!isPrize;byId('claim-memory').disabled=Boolean(claimed);byId('claim-memory').textContent=claimed?'Этот подарок уже твой ♡':'Этот подарок мой ♡';
 byId('spin-again').hidden=!isPrize||GiftState.remaining(state)===0;
 byId('saved-note').textContent=isPrize?`${3-GiftState.remaining(state)} из 3 подарков открыто`:'';
 document.body.classList.add('result-open');dialog.showModal();byId('reward-close').focus({preventScroll:true});
}
function showPrize(prize){showDialog(prize,true);}
byId('claim-memory').onclick=()=>{if(!selectedIsPrize||!selected)return;if(storeState(GiftState.claim(state,selected.id))){byId('claim-memory').textContent='Этот подарок уже твой ♡';byId('claim-memory').disabled=true;byId('saved-note').textContent='Подарок сохранён. С днём рождения, принцесса ♡';syncInterface();}};
byId('reward-close').onclick=()=>dialog.close();byId('spin-again').onclick=()=>{dialog.close();openCase();};
dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close();});
dialog.addEventListener('close',()=>{document.body.classList.remove('result-open');previousFocus?.focus({preventScroll:true});});
function makeSpinCard(memory){const card=document.createElement('figure');card.className='spin-card';card.dataset.id=memory.id;const colors=['#b36b99','#bf83ad','#d99cbd','#d4a8c1'];card.style.setProperty('--card-accent',colors[randomIndex(colors.length)]);const caption=document.createElement('figcaption');caption.textContent=memory.label;card.append(photoElement(memory),caption);return card;}
function dimensions(){const card=track.querySelector('.spin-card');return {width:card?.getBoundingClientRect().width||180,gap:parseFloat(getComputedStyle(track).gap)||12,viewport:windowEl.clientWidth};}
function targetFor(index){const d=dimensions();return d.viewport/2-d.width/2-index*(d.width+d.gap);}
function renderIdle(){track.replaceChildren(...Array.from({length:11},(_,i)=>makeSpinCard(memories[i%memories.length])));track.setAttribute('aria-hidden','true');track.style.transform=`translateX(${targetFor(4)}px)`;}
function loadPhoto(src){return new Promise(resolve=>{const image=new Image();image.onload=()=>resolve(true);image.onerror=()=>resolve(false);image.src=src;});}
async function openCase(){
 if(spinning||dialog.open||!allPrizesReady()||!hasPromo())return;state=readState();
 const pending=state.openings.find(e=>e.status==='reserved');
 if(pending){const prize=giftPrizes.find(p=>p.id===pending.id);if(!storeState(GiftState.complete(state,prize.id)))return;syncInterface();showPrize(prize);return;}
 if(GiftState.remaining(state)===0){syncInterface();return;}
 spinning=true;syncInterface();byId('spin-status').textContent='Готовлю твоё открытие ♡';
 const prize=giftPrizes[state.openings.length],moment=memories[randomIndex(memories.length)];
 const loaded=await Promise.race([Promise.all([loadPhoto(prize.image),loadPhoto(moment.src)]).then(results=>results.every(Boolean)),new Promise(resolve=>setTimeout(()=>resolve(false),12000))]);
 if(!loaded){spinning=false;syncInterface();byId('spin-status').textContent='Не удалось загрузить подарок. Попытка не потрачена — попробуй ещё раз ♡';return;}
 state=readState();const next=GiftState.reserve(state,prize.id);
 if(!next||!storeState(next)){spinning=false;syncInterface();byId('spin-status').textContent='Не получилось сохранить открытие. Разреши сохранение данных в браузере и попробуй снова ♡';return;}
 syncInterface();const winnerIndex=46+randomIndex(5),sequence=Array.from({length:winnerIndex+8},()=>memories[randomIndex(memories.length)]);sequence[winnerIndex]=moment;
 track.replaceChildren(...sequence.map(makeSpinCard));const start=targetFor(3),end=targetFor(winnerIndex);track.style.transform=`translateX(${start}px)`;
 byId('spin-status').textContent='Пока крутятся воспоминания, твой подарок уже ждёт ♡';
 const duration=reducedMotion.matches?1:byId('quick-spin').checked?1200:6500;
 animation=track.animate([{transform:`translateX(${start}px)`},{transform:`translateX(${end}px)`}],{duration,easing:'cubic-bezier(.12,.77,.13,1)',fill:'forwards'});
 try{await animation.finished;}catch{}
 track.style.transform=`translateX(${targetFor(winnerIndex)}px)`;animation?.cancel();animation=null;track.children[winnerIndex].classList.add('is-winner');
 storeState(GiftState.complete(state,prize.id));spinning=false;syncInterface();byId('spin-status').textContent=`Твой подарок: ${prize.name}`;showPrize(prize);
}
openButton.onclick=openCase;
let resizeTimer;addEventListener('resize',()=>{clearTimeout(resizeTimer);resizeTimer=setTimeout(()=>{if(spinning)animation?.cancel();else if(!dialog.open)renderIdle();},150);});
addEventListener('storage',event=>{if(event.key===storageKey&&!spinning){state=readState();syncInterface();}});
byId('memory-count').textContent=memories.length;
memories.forEach((memory,i)=>{const button=document.createElement('button');button.type='button';button.className='memory-card';button.setAttribute('aria-label',`Посмотреть: ${memory.label}`);const image=photoElement(memory);image.loading='lazy';const number=document.createElement('span');number.className='memory-number';number.textContent=String(i+1).padStart(2,'0');const label=document.createElement('span');label.className='memory-label';label.textContent=memory.label;button.append(image,number,label);button.onclick=()=>{if(!spinning)showDialog(memory,false);};byId('contents-grid').append(button);});
const tickerItems=memories.slice(0,12);for(const memory of [...tickerItems,...tickerItems]){const item=document.createElement('div');item.className='ticker-item';item.setAttribute('aria-hidden','true');const label=document.createElement('span'),tag=document.createElement('small');tag.textContent='НАША ИСТОРИЯ';label.append(tag,document.createTextNode(memory.label));item.append(photoElement(memory),label);byId('ticker-track').append(item);}
if(!reducedMotion.matches)for(let i=0;i<(innerWidth<600?12:22);i++){const heart=document.createElement('span');heart.className='gift-heart';heart.textContent='♡';heart.style.cssText=`left:${Math.random()*97}%;--size:${16+Math.random()*25}px;--duration:${25+Math.random()*20}s;--delay:-${Math.random()*40}s`;byId('gift-hearts').append(heart);}
function hasPromo(){try{return localStorage.getItem('kitty-love-promo-v1')==='yes';}catch{return false;}}
function renderInventory(){
 byId('gift-balance').textContent=hasPromo()?3333-state.openings.length*1111:0;
 const grid=byId('inventory');grid.replaceChildren();
 const opened=state.openings.filter(e=>e.status==='opened');
 if(!opened.length){grid.textContent='Здесь появятся твои подарки после открытия ♡';return;}
 opened.forEach(entry=>{const prize=giftPrizes.find(p=>p.id===entry.id);const card=document.createElement('article');card.className='prize-card';const img=document.createElement('img');img.src=prize.image;img.alt=prize.name;const title=document.createElement('strong');title.textContent=prize.name;const button=document.createElement('button');button.className='quiet-button';button.textContent=entry.claimed?'Обмен запрошен ♡':'Получить через Steam ↗';button.onclick=()=>{storeState(GiftState.claim(state,prize.id));renderInventory();byId('inventory-note').textContent='Подарок отмечен для обмена. Напиши Стасу: он передаст скин в Steam вручную ♡';window.open('https://t.me/m/DYYZnQJrMzVi','_blank','noopener,noreferrer');};const steam=document.createElement('a');steam.href='https://steamcommunity.com/my/tradeoffers/';steam.target='_blank';steam.rel='noopener noreferrer';steam.textContent='Открыть Steam ↗';steam.className='steam-link';card.append(img,title,button,steam);grid.append(card);});
}
byId('promo-form').onsubmit=e=>{e.preventDefault();const code=byId('promo-code').value.trim().toLocaleLowerCase('ru').replace(/\s+/g,' ');if(code!=='я тебя люблю'){byId('promo-status').textContent='Подсказка: три слова, которые я говорю тебе всегда ♡';return;}if(hasPromo()){byId('promo-status').textContent='Промокод уже активирован ♡';return;}try{localStorage.setItem('kitty-love-promo-v1','yes');byId('promo-status').textContent='Я тебя тоже люблю! Твои 3333 ♡ уже здесь';syncInterface();}catch{byId('promo-status').textContent='Разреши сохранение данных в браузере и попробуй снова';}};
syncInterface();renderIdle();