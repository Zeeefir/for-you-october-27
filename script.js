// Замените тексты и пути к фото здесь. На каждом экране — три фотографии.
const pages = [
  {eyebrow:'С ДНЁМ РОЖДЕНИЯ, ЛЮБИМАЯ',title:'Тебе сегодня <em>восемнадцать ♡</em>',message:'Сегодня мне особенно хочется быть рядом.\nОбнять тебя, увидеть твою улыбку и сказать, как сильно я тебя люблю. Этот маленький мир я сделал для тебя.',caption:'Пусть сегодня между нами будет чуть меньше километров.',button:'Открыть мой подарок',labels:['твоя улыбка','моя любимая','твой особенный день']},
  {eyebrow:'ЕСЛИ БЫ Я БЫЛ РЯДОМ',title:'Я бы начал <em>с объятий.</em>',message:'С тех самых, в которых не хочется торопиться. А потом сказал бы: «С днём рождения, любимая». Мне хочется держать тебя за руку и видеть, как ты радуешься этому дню.',caption:'Пока я далеко — пусть эти слова обнимут тебя за меня.',button:'А потом?',labels:['быть ближе','держать за руку','обнять крепко']},
  {eyebrow:'НАШИ МАЛЕНЬКИЕ СОКРОВИЩА',title:'Моменты, где <em>есть мы.</em>',message:'Мне дороги наши фотографии. В них можно вернуться взглядом, когда особенно скучаешь. Здесь будут те самые мгновения, которые хочется беречь и однажды повторить.',caption:'У каждого снимка — своё маленькое «помнишь?».',button:'Ещё одно воспоминание',labels:['мы с тобой','любимый момент','счастье рядом']},
  {eyebrow:'ЕЩЁ ОДНА СТРАНИЦА ТВОЕЙ ИСТОРИИ',title:'Твой прошлый <em>день рождения.</em>',message:'Здесь будут фотографии с твоего прошлого праздника. А сегодня начинается новый год твоей жизни. Мне так хочется, чтобы в нём было много поводов улыбаться.',caption:'Ещё больше счастливых фотографий впереди.',button:'Хочу сказать тебе',labels:['тот самый день','загадай желание','сохраним это']},
  {eyebrow:'САМОЕ ВАЖНОЕ',title:'Я люблю тебя. <em>Очень.</em>',message:'С твоим восемнадцатилетием, любимая. Желаю тебе смелости идти к мечтам, людей, с которыми тепло, и дней, которые хочется запоминать. Я хочу поддерживать тебя, слушать и делить с тобой и большие события, и обычные вечера.\nТы очень много для меня значишь.',caption:'Есть слова, которые хочется сказать своим голосом.',button:'Послушай меня',labels:['моя нежность','моя радость','моя любовь']},
  {eyebrow:'ДО НАШЕЙ ВСТРЕЧИ',title:'Одно объятие <em>я тебе уже должен.</em>',message:'Когда мы встретимся, я скажу всё это ещё раз. Уже обнимая тебя. А сегодня знай: я думаю о тебе и очень хочу, чтобы ты была счастлива.\nС днём рождения, моя любимая.',caption:'Расстояние есть. И любовь тоже есть.',button:'Обнять тебя ♡',labels:['ты','мы','наше впереди']}
];
let current = 0;
const $ = id => document.getElementById(id);
const photoPath = (page, slot) => `assets/photos/${page + 1}-${slot + 1}.jpg`;
function render() {
  const page = pages[current];
  $('eyebrow').textContent = page.eyebrow;
  $('title').innerHTML = page.title;
  $('message').textContent = page.message;
  $('caption').textContent = page.caption;
  $('next-label').textContent = page.button;
  $('chapter').textContent = '27 ОКТЯБРЯ — ТВОЙ ДЕНЬ';
  $('back').disabled = current === 0;
  $('photos').replaceChildren(...page.labels.map((label, i) => {
    const figure = document.createElement('figure'); figure.className = 'photo';
    const area = document.createElement('div'); area.className = 'photo-area';
    area.innerHTML = '<span class="placeholder-heart">♡</span><span class="placeholder-text">здесь будет наше фото</span>';
    const img = document.createElement('img'); img.alt = label;
    img.onload = () => area.replaceChildren(img); img.onerror = () => img.remove(); img.src = photoPath(current, i);
    const caption = document.createElement('figcaption'); caption.textContent = label;
    figure.append(area, caption); return figure;
  }));
  $('progress').replaceChildren(...pages.map((_,i) => {
    const button = document.createElement('button'); button.className = i === current ? 'active' : '';
    button.setAttribute('aria-label', `Страница ${i+1}`); if(i===current) button.setAttribute('aria-current','step');
    button.onclick = () => { current = i; render(); }; return button;
  }));
  $('scene').classList.remove('enter'); void $('scene').offsetWidth; $('scene').classList.add('enter');
}
function burst(button, count = 10) {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const rect = button.getBoundingClientRect();
  for(let i=0;i<count;i++){
    const heart=document.createElement('span');heart.className='burst';heart.textContent='♡';heart.setAttribute('aria-hidden','true');
    heart.style.cssText=`left:${rect.left+rect.width/2}px;top:${rect.top}px;font-size:${14+Math.random()*20}px;--x:${(Math.random()-.5)*280}px;--y:${-60-Math.random()*170}px`;
    document.body.append(heart);setTimeout(()=>heart.remove(),1100);
  }
}
$('next').onclick = () => {
  burst($('next'));
  if(current === 4){$('audio-dialog').showModal();return;}
  if(current === 5){$('caption').textContent='Обнимаю крепко. С днём рождения, моя любимая ♡';burst($('next'),24);return;}
  current++;render();
};
$('back').onclick=()=>{if(current>0){current--;render();}};
document.querySelector('.signature').onclick=e=>{e.preventDefault();current=0;render();};
$('sound').onclick=()=>$('audio-dialog').showModal();
$('close-audio').onclick=()=>{$('voice').pause();$('audio-dialog').close();if(current===4){current++;render();}};
$('audio-dialog').addEventListener('close',()=>$('voice').pause());
let audioUrl;
$('audio-file').onchange = e => {
  const file=e.target.files[0];if(!file)return;
  if(audioUrl)URL.revokeObjectURL(audioUrl);audioUrl=URL.createObjectURL(file);$('voice').src=audioUrl;
  $('audio-note').textContent='Запись готова. Нажми ▶, чтобы услышать её.';
};
// Когда запись готова, положите её в assets/voice.mp3 и раскомментируйте:
// $('voice').src = 'assets/voice.mp3';
// $('audio-note').textContent = 'Это сообщение — только для тебя.';
// Каждый пролёт заново выбирает позицию, изгиб, скорость и прозрачность.
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
const randomBetween = (min, max) => min + Math.random() * (max - min);
function flyHeart(heart, initial = false) {
  const duration = randomBetween(22000, 47000);
  const drift = randomBetween(-90, 90);
  const sway = randomBetween(15, 60) * (Math.random() < .5 ? -1 : 1);
  const tilt = randomBetween(-24, 24);
  const opacity = randomBetween(.14, .4);
  heart.style.cssText = `left:${randomBetween(1,96)}%;font-size:${randomBetween(16,48)}px;animation:none`;
  const animation = heart.animate([
    {transform:`translate(0, 0) rotate(${tilt}deg)`,opacity:0,offset:0},
    {transform:`translate(${sway*.5}px, -20vh) rotate(${-tilt*.4}deg)`,opacity,offset:.18},
    {transform:`translate(${drift*.5-sway}px, -54vh) rotate(${tilt*.7}deg)`,opacity:opacity*.8,offset:.47},
    {transform:`translate(${drift+sway*.5}px, -89vh) rotate(${-tilt}deg)`,opacity,offset:.78},
    {transform:`translate(${drift}px, -120vh) rotate(${tilt*.3}deg)`,opacity:0,offset:1}
  ], {duration, delay:initial ? 0 : randomBetween(200,2500), easing:'linear', fill:'both'});
  if(initial) animation.currentTime = Math.random() * duration;
  animation.onfinish = () => {
    animation.cancel();
    if(!reducedMotion.matches) flyHeart(heart);
  };
}
function startHearts() {
  $('hearts').getAnimations({subtree:true}).forEach(animation => animation.cancel());
  $('hearts').replaceChildren();
  if(reducedMotion.matches) return;
  for(let i=0;i<42;i++){
    const heart=document.createElement('span');heart.className='floating-heart';heart.textContent='♡';
    $('hearts').append(heart);
    flyHeart(heart,true);
  }
}
reducedMotion.addEventListener('change',startHearts);
startHearts();
render();

