// Личные тексты, фотографии и подписи к главам.
const pages = [
  {eyebrow:'С ДНЁМ РОЖДЕНИЯ, ЛЮБИМАЯ',title:'Тебе сегодня <em>восемнадцать ♡</em>',message:'Сегодня мне особенно хочется быть рядом.\nОбнять тебя, увидеть твою улыбку и сказать, как сильно я тебя люблю. Этот маленький мир я сделал для тебя.',caption:'Пусть сегодня между нами будет чуть меньше километров.',button:'Открыть мой подарок',labels:['твоя улыбка','моя любимая','твой особенный день']},
  {eyebrow:'ЕСЛИ БЫ Я БЫЛ РЯДОМ',title:'Я бы начал <em>с объятий.</em>',message:'С тех самых, в которых не хочется торопиться. А потом сказал бы: «С днём рождения, любимая». Мне хочется держать тебя за руку и видеть, как ты радуешься этому дню.',caption:'Пока я далеко — пусть эти слова обнимут тебя за меня.',button:'А потом?',labels:['быть ближе','держать за руку','обнять крепко']},
  {eyebrow:'НАШИ МАЛЕНЬКИЕ СОКРОВИЩА',title:'Моменты, где <em>есть мы.</em>',message:'Мне дороги наши фотографии. В них можно вернуться взглядом, когда особенно скучаешь. Здесь будут те самые мгновения, которые хочется беречь и однажды повторить.',caption:'У каждого снимка — своё маленькое «помнишь?».',button:'Ещё одно воспоминание',labels:['мы с тобой','любимый момент','счастье рядом']},
  {eyebrow:'ЕЩЁ ОДНА СТРАНИЦА ТВОЕЙ ИСТОРИИ',title:'Твой прошлый <em>день рождения.</em>',message:'Здесь будут фотографии с твоего прошлого праздника. А сегодня начинается новый год твоей жизни. Мне так хочется, чтобы в нём было много поводов улыбаться.',caption:'Ещё больше счастливых фотографий впереди.',button:'Хочу сказать тебе',labels:['тот самый день','загадай желание','сохраним это']},
  {eyebrow:'САМОЕ ВАЖНОЕ',title:'Я люблю тебя. <em>Очень.</em>',message:'С твоим восемнадцатилетием, любимая. Пусть у тебя хватает смелости идти к своим мечтам. Пусть рядом будут те, кто любит и поддерживает тебя, а поводов для улыбки становится всё больше. Я хочу поддерживать тебя, слушать и делить с тобой и большие события, и обычные вечера.\nТы очень много для меня значишь.',caption:'Есть слова, которые хочется сказать своим голосом.',button:'Послушай меня',labels:['моя нежность','моя радость','моя любовь']},
  {eyebrow:'ДО НАШЕЙ ВСТРЕЧИ',title:'Одно объятие <em>я тебе уже должен.</em>',message:'Когда мы встретимся, я скажу всё это ещё раз. Уже обнимая тебя. А сегодня знай: я думаю о тебе и очень хочу, чтобы ты была счастлива.\nС днём рождения, моя любимая.',caption:'Расстояние есть. И любовь тоже есть.',button:'Обнять тебя ♡',labels:['ты','мы','наше впереди']}
];
pages[0].message="Сегодня особенно хочется быть рядом с тобой, чтобы сделать этот день счастливее. Обнять тебя, увидеть твою улыбку. Именно поэтому я сделал этот маленький мир для тебя и твоих воспоминаний.\n\nПринцесса моя, сегодня твой день. Да-да, твой день рождения! И в этот прекрасный день я очень хочу сказать тебе пару, а может, и пару десятков ласковых слов.\n\nЯ буду вести тебя по этому сайту через текст. Нажимай на фотографии: на обороте каждой — маленькая предыстория или то, за что я люблю этот снимок. Хочу, чтобы ты почувствовала всё, что я хотел тебе сказать, и чтобы эти слова попали прямо в твоё сердечко.\n\nЯ очень тебя люблю. Нажимай, чтобы прочитать дальше ♡";
pages[1].message="С тех самых объятий, в которых не хочется торопиться и никуда спешить. А потом сказал бы: «С днём рождения, любимая». Хочется просто держать тебя за руку и видеть, как ты радуешься этому дню.\n\nХочется видеть тебя счастливой в моих объятиях. Увы, сейчас я не могу быть рядом. Но пройдёт ещё немного времени, и мы снова будем гулять, обниматься и радоваться каждому часу вместе.\n\nКогда думаю о нашем будущем, представляю, сколько ещё тёплых моментов у нас впереди. И очень жду их ♡";
pages[2].message="Мне нравятся все наши фотографии, ведь в них можно вернуться взглядом, когда особенно скучаешь. Эти мгновения хочется беречь и однажды повторить.\n\nА помнишь, как мы хотели видеть друг друга каждый день? Жили от воскресенья до субботы и каждую неделю ждали выходных, чтобы подольше побыть рядом.\n\nСейчас это сделать сложнее. Но нам осталось потерпеть два года, и я верю, что это будет того стоить. Будем жить вместе, в одной квартире, и наши мечты станут явью. Ещё немного терпения — и мы будем рядышком ♡";
pages[4].button='Дальше ♡';
pages[4].caption='Все эти слова — тебе, моя любимая.';
pages.splice(5,0,{
  eyebrow:'У ТЕБЯ СТОЛЬКО НЕЖНЫХ ИМЁН',
  title:'Как тебе <em>приятнее, лучик?</em>',
  message:'Любимая, солнышко, принцесса… В каждом слове — моя нежность к тебе. А какие из них ты любишь больше? Подвинь ползунки и расскажи мне ♡',
  caption:'Как бы я тебя ни называл — ты всегда моя любимая.',
  button:'И последнее…',labels:['моё солнышко','моя принцесса','мой лучик'],photoFolder:7,quiz:true
});
pages.splice(4,0,{
  title:'Наши фотографии',eyebrow:'',message:'',caption:'Я люблю тебя в любом уголке мира. Даже когда мы далеко друг от друга ♡',button:'→',gallery:true,labels:[]
});
// Все 27 снимков используются один раз. Номера соответствуют photo-manifest.json.
const collections=[
  [[22,'Самые красивые глазки'],[26,'У себя дома'],[27,'Уже на чешском']],
  [[1,'Первый раз у меня дома'],[2,'Было классно'],[5,'Вайбовые обнимашки']],
  [[10,'Наша первая фотосессия'],[11,'Наша совместная красота'],[12,'И снова фотосессия']],
  [[16,'Прошлый день рождения'],[17,'Тот самый праздник'],[18,'Вместе в твой день'],[19,'Сохраним этот момент']],
  [[3,'В Астане по делам'],[7,'Гуляли вместе на районе'],[8,'На дрифте с Матвейкой и папой'],[13,'Первая поездка с моими родителями'],[15,'Просто вместе']],
  [[9,'Катались до красивого заката'],[21,'Расцеловала меня'],[23,'Собирались вкусно кушать']],
  [[4,'В самолёте'],[14,'Первые вайбовые посиделки'],[6,'Вкусно кушали суши']],
  [[20,'Кайфовали в парке'],[24,'Перед отправкой в Чехию'],[25,'Гуляли до мамы']]
];
collections.forEach((photos,i)=>{
  pages[i].photos=photos.map(([id,label])=>({src:`assets/photos/memory-${String(id).padStart(2,'0')}.jpg`,label,position:id===15?'center bottom':id===25?'15% center':'center 40%'}));
  pages[i].labels=photos.map(([,label])=>label);
});

pages[3].message='Смотрю на фотографии с твоего прошлого праздника, а сегодня начинается новый год твоей жизни. Мне так хочется, чтобы в нём было много поводов улыбаться.';
pages[3].button='Ещё немного нас';
pages[0].photoNotes=['Это самые красивые глазки. Мне так нравится смотреть в них ♡','Здесь ты выглядишь волшебно. Эти кудряшки просто великолепны ♡','Если я правильно помню, это был твой первый день на занятиях. Ты тогда так много рассказывала мне об учёбе ♡'];
pages[1].photoNotes=['Ты впервые у меня дома. Всё только начиналось, а мы уже были так влюблены друг в друга. Помню, как здорово нам тогда было вместе ♡','Тогда мы решили побыть только вдвоём. Долго спали, никуда не торопились — и нам было так хорошо рядом друг с другом ♡','Это была наша вторая встреча. Мы были у меня дома и так много обнимались — хотелось просто быть поближе друг к другу ♡'];
pages[2].photoNotes=['Я пришёл к тебе на урок, а нас выбрали для фотосессии как самую красивую пару. Для меня мы такими и были ♡','Тогда я решил запечатлеть нас такими весёлыми — получилось прикольно. Если мне не изменяет память, потом мы пошли гулять до твоей мамы ♡','Здесь нас фотографировали другие ребята, а все снимки сразу отправляли мне на телефон — ведь тогда айфон был только у меня. Так у меня и собрались эти воспоминания о нас ♡'];
pages[3].photoNotes=['Тогда Матвейка подарил тебе одноразку. Ты чуть нас не прибила — ведь твой папа про это знал. Такое не забудешь 😅','Здесь мы фотографировались на новый iPhone 16 твоей тёти. Помню, как тебе понравилась его камера ♡','А тут мы фотографировались для отчёта: вот, день рождения отмечаем, всё как положено, пххпхп ♡','Ещё одно фото для отчёта, но уже с твоей тётей — той самой, на чей новый iPhone мы фотографировались на втором снимке ♡'];
pages[5].photoNotes=['Хотели сделать красивые фотографии субарика, а заодно получились и наши — просто волшебные. Этот закат, ты рядом… ♡','Здесь ты меня всего расцеловала, а потом мы пошли показывать это маме. Она была в шоке, пххпхп ♡','Собирались поехать и вкусно покушать. Вот только в честь чего — уже не помню 🤔'];
pages[6].photoNotes=['Здесь ты уже была в самолёте. Мы тогда испытывали такие разные эмоции: я следил за твоим полётом, а ты делала фоточки ♡','Это была такая вайбовая прогулка после «Шага». Я провожал тебя домой к бабушке — очень тёплое воспоминание о нас ♡','А это уже продолжение того вечера. Ждали наш заказ и решили немного пофоткаться — получились такие забавные мы ♡'];
pages[7].photoNotes=['Ты решила пофоткаться и была немного злюсей, а я решил сделать тебе улыбочку. Вот так и получился этот кадр ♡','Тут мы ездили в МЕГУ за вещами. Кажется, это было совсем недавно — будто только вчера ♡','В тот день мы хотели прогуляться, но никак не могли решить куда. В итоге пошли пешком до твоей мамы — главное, что вместе ♡'];
pages[pages.length-1].button='Послушай меня ♡';
pages[pages.length-1].audio=true;
pages.push({
  eyebrow:'И ПОСЛЕДНЯЯ МАЛЕНЬКАЯ ПРОСЬБА',
  title:'А теперь <em>улыбнись, солнышко ♡</em>',
  message:'А теперь я жду твою улыбку. Хочу, чтобы весь этот день ты провела с улыбкой на лице — самой красивой для меня.\nУлыбнись, любимая. Даже на расстоянии я хочу делать тебя счастливой.\nА теперь обязательно пришли мне свою фотографию с улыбкой — очень хочу её увидеть ♡',
  caption:'Пусть сегодня у тебя будет много поводов для счастья.',
  button:'Я улыбаюсь ♡',labels:[],photos:[],smile:true
});
pages.splice(7,0,{
  eyebrow:'ЕЩЁ НЕМНОГО ТЕПЛА',
  title:'Друзья тоже хотят <em>тебя поздравить ♡</em>',
  message:'Сегодня тёплые слова для тебя есть не только у меня. Твои друзья тоже хотят сделать этот день особенным.',
  caption:'Нажми на фото — открой поздравление ♡',
  button:'Дальше ♡',photos:Array.from({length:5},()=>({src:'',position:'center'})),labels:['Дэн','Артур','Оксана','Аружан · Анель · Саша','Максим'],friends:true
});
pages.find(page=>page.friends).photos[1]={src:'assets/photos/friend-artur.jpg',position:'center'};
pages.find(page=>page.friends).photos[2]={src:'assets/photos/friend-oksana.jpg',position:'center 40%'};
pages.find(page=>page.friends).photos[3]={src:'assets/photos/friend-girls.jpg',position:'center 60%'};
pages.find(page=>page.friends).photos[0]={src:'assets/photos/friend-den.jpg',position:'right center'};
pages.find(page=>page.friends).photos[4]={src:'assets/photos/friend-maxim.jpg',position:'right center'};
pages.find(page=>page.friends).photoNotes=['Ксюша с днем рождения желаю тебе всего всего самого наилучшего пусть в жизни будут только победы что бы все мечты сбывались что бы все цели достигались что бы рядом были верные и любящие люди с днем рождение'];
pages.find(page=>page.friends).photoNotes[1]='чушка поздравляю тебя с твоим 18 летием!! Желаю счастья и здоровья,желаю что бы у вас со стасом был бесконечный брак и деньги на додеп ,я очень рад что познакомился с тобой в так называемом шаге ,желаю тебе всего самого наилучшего ,по больше тебе денег,хороших подружек, еще раз поздравляю с 18 летием Ксения';
pages.find(page=>page.friends).photoNotes[2]=`Холодно холодно но ничто 
Я поцелую косое твое плечо 
И пусть у тебя лицо кирпичем 
Но только с тобою мне все еще  горячо 
Кароч с Др 
Пусть в жизни тебе будет со Стасом всегда Горячо но а пока мы согреваем тебя ну или ты нас`;
pages.find(page=>page.friends).photoNotes[3]=`Аружан
Поздравляю с днём рождения! Хоть с нашего знакомства прошло и не очень много времени, я очень рада, что оно прошло в такой приятной компании, и что всё это будет продолжаться и дальше! Хочу пожелать исполнения твоей цели, с которой ты сюда пришла, и в целом счастливого пути дальше!

Анель
С днем рождения дочь моя! Желаю тебе, чтобы все твои цели и мечты сбылись. Пусть жизнь твоя будет полна красок и ярких эмоций. Счастья и крепкой любви вам со Стасом! (жду приглашения на вашу свадьбу😋)`;
const finale=pages.find(page=>page.smile);
finale.photos=[28,29,30,31,32].map(id=>({src:`assets/photos/memory-${id}.jpg`,position:id===32?'center 50%':'center 40%'}));
finale.photos[0]={src:'assets/photos/final-bench.jpg',position:'center 45%'};
finale.photos[3]={src:'assets/photos/final-call.jpg',position:'35% center'};
finale.labels=['Моя любимая ♡','Вместе в Астане','Твоя улыбка — мой подарок','Веселились с Артуром','После Нового года'];
finale.photoNotes=['Как же я люблю смотреть на тебя ♡','Ещё одна наша прогулка вдвоём в Астане ♡','Просто захотелось попросить у тебя фотографию. Как же приятно видеть тебя ♡','Тогда вы веселились с Артуром: он бесился, а вы смеялись с этого ♡','Если я правильно помню, после Нового года мы смотрели подарочки ♡'];
const nicknames=['Любимая','Солнышко','Принцесса','Котик','Киса','Лучик солнца'];
let nicknameScores={};
try{
  const saved=JSON.parse(localStorage.getItem('birthday-nicknames')||'{}');
  if(saved && typeof saved==='object') nicknames.forEach(name=>{
    if(Number.isFinite(saved[name]) && Number.isInteger(saved[name]*2) && saved[name]>=0 && saved[name]<=10) nicknameScores[name]=saved[name];
  });
}catch{}
const slideKeys=['intro','hugs','memories','birthday','gallery','love','nicknames','friends','meeting','smile'];
pages.forEach((page,i)=>{page.key=slideKeys[i];});
let current = 0;
try{
  const savedSlide=sessionStorage.getItem('birthday-current-slide');
  const savedIndex=pages.findIndex(page=>page.key===savedSlide);
  if(savedIndex>=0)current=savedIndex;
}catch{}
const $ = id => document.getElementById(id);
const photoPath = (page, slot) => pages[page].photos[slot].src;
function renderNicknameQuiz(){
  document.querySelector('.nickname-quiz')?.remove();
  $('scene').classList.toggle('quiz-scene',Boolean(pages[current].quiz));
  if(!pages[current].quiz) return;
  const quiz=document.createElement('div');quiz.className='nickname-quiz';
  const scale=document.createElement('p');scale.className='nickname-scale';scale.textContent='0 — не моё · 10 — таю от нежности';quiz.append(scale);
  nicknames.forEach((name,i)=>{
    const row=document.createElement('div');row.className='nickname-row';
    const label=document.createElement('label');label.htmlFor=`nickname-${i}`;label.textContent=name;
    const output=document.createElement('output');output.htmlFor=label.htmlFor;
    const slider=document.createElement('span');slider.className='nickname-slider';
    const rail=document.createElement('span');rail.className='nickname-rail';rail.setAttribute('aria-hidden','true');
    const fill=document.createElement('span');fill.className='nickname-fill';rail.append(fill);
    const thumb=document.createElement('span');thumb.className='nickname-thumb';thumb.setAttribute('aria-hidden','true');
    const input=document.createElement('input');input.type='range';input.min=0;input.max=10;input.step=.01;input.id=label.htmlFor;
    input.value=nicknameScores[name]??5;
    function update(){
      const value=Number(input.value), percent=value*10;
      const formatted=(Math.round(value*2)/2).toLocaleString('ru-RU');
      output.textContent=`${formatted} / 10`;
      fill.style.width=`${percent}%`;
      thumb.style.left=`calc(${percent}% + ${15-percent*.3}px)`;
      input.setAttribute('aria-valuetext',`${formatted} из 10`);
    }
    function snap(){
      slider.classList.add('is-snapping');
      input.value=Math.round(Number(input.value)*2)/2;
      nicknameScores[name]=Number(input.value);update();
      try{localStorage.setItem('birthday-nicknames',JSON.stringify(nicknameScores));}catch{}
    }
    input.oninput=()=>{slider.classList.remove('is-snapping');update();};
    input.onchange=snap;
    input.onkeydown=event=>{
      const moves={ArrowRight:.5,ArrowUp:.5,ArrowLeft:-.5,ArrowDown:-.5,PageUp:1,PageDown:-1};
      if(!(event.key in moves) && event.key!=='Home' && event.key!=='End') return;
      event.preventDefault();
      input.value=event.key==='Home'?0:event.key==='End'?10:Math.min(10,Math.max(0,Number(input.value)+moves[event.key]));
      snap();
    };
    update();slider.append(rail,thumb,input);row.append(label,output,slider);quiz.append(row);
  });
  const note=document.createElement('p');note.className='nickname-save-note';
  note.textContent='Ответы останутся на этом устройстве. Можешь прислать мне скриншот ♡';quiz.append(note);
  document.querySelector('.copy').append(quiz);
}
function render() {
  const page = pages[current];
  try{sessionStorage.setItem('birthday-current-slide',page.key);}catch{}
  $('eyebrow').textContent = page.eyebrow;
  $('title').innerHTML = page.title;
  $('message').textContent = page.message;
  $('caption').textContent = page.caption;
  $('next-label').textContent = page.button;
  $('chapter').textContent = '27 ОКТЯБРЯ — ТВОЙ ДЕНЬ';
  $('back').disabled = current === 0;
  $('sound').hidden=!page.audio;
  $('scene').classList.toggle('gallery-scene',Boolean(page.gallery));
  $('scene').classList.toggle('four-photos',page.photos.length===4);
  $('scene').classList.toggle('smile-scene',Boolean(page.smile));
  $('scene').classList.toggle('friends-scene',Boolean(page.friends));
  $('friends-placeholder').hidden=!page.friends || page.photos.length>0;
  $('scene').classList.toggle('smile-photos',Boolean(page.smile && page.photos.length));
  document.querySelector('main').classList.toggle('gallery-mode',Boolean(page.gallery));
  $('photos').dataset.count=page.photos.length;
  renderNicknameQuiz();
  $('photos').replaceChildren(...page.labels.map((label, i) => {
    const figure = document.createElement(page.gallery?'figure':'button'); if(!page.gallery) figure.type = 'button'; figure.className = 'photo';
    figure.setAttribute('aria-label', page.gallery?label:page.friends?`${label} — открыть поздравление`:`${label} — прочитать на обороте`);
    if(!page.gallery) figure.setAttribute('aria-pressed', 'false');
    const inner = document.createElement('span'); inner.className = 'photo-inner';
    const front = document.createElement('span'); front.className = 'photo-front';
    const area = document.createElement('div'); area.className = 'photo-area';
    area.innerHTML = '<span class="placeholder-heart">♡</span><span class="placeholder-text">здесь будет наше фото</span>';
    const img = document.createElement('img'); img.alt = label;
    img.style.objectPosition=page.photos[i].position;
    img.decoding='async';
    img.onload = () => area.replaceChildren(img); img.onerror = () => img.remove(); if(photoPath(current,i))img.src = photoPath(current, i);
    if(page.friends)area.querySelector('.placeholder-text').textContent='здесь будет фото';
    if(page.gallery){front.append(area);inner.append(front);figure.append(inner);return figure;}
    const caption = document.createElement('span'); caption.className = 'photo-caption'; caption.textContent = label;
    const hint = document.createElement('span'); hint.className = 'photo-hint'; hint.textContent = page.friends?'открой поздравление ♡':'переверни ♡';
    const back = document.createElement('span'); back.className = 'photo-back'; back.setAttribute('aria-hidden','true');
    const heart = document.createElement('span'); heart.className = 'photo-back-heart'; heart.textContent = '♡';
    const heading = document.createElement('span'); heading.className = 'photo-back-title'; heading.textContent = 'Моё воспоминание';
    const note = document.createElement('span'); note.className = 'photo-note';
    // Добавьте photoNotes: ['Текст для первого фото', 'Для второго', 'Для третьего'] в нужную главу.
    note.textContent = page.photoNotes?.[i] || 'Здесь будет моя маленькая история о том, почему этот снимок мне так дорог.';
    const backHint = document.createElement('span'); backHint.className = 'photo-hint'; backHint.textContent = 'нажми, чтобы вернуться ↶';
    back.append(heart, heading, note, backHint);
    front.append(area, caption, hint); inner.append(front,back); figure.append(inner);
    figure.onclick = () => {
      if(page.friends){openFriendCard(figure,i);return;}
      if(figure.classList.contains('is-turning'))return;
      const changeSide=()=>{
        const flipped = figure.classList.toggle('is-flipped');
        figure.setAttribute('aria-pressed',String(flipped));
        figure.setAttribute('aria-label',flipped ? `${label} — вернуться к фотографии` : `${label} — прочитать на обороте`);
        front.setAttribute('aria-hidden',String(flipped)); back.setAttribute('aria-hidden',String(!flipped));
      };
      if(reducedMotion.matches){changeSide();return;}
      figure.classList.add('is-turning');
      setTimeout(changeSide,180);
      setTimeout(()=>figure.classList.remove('is-turning'),380);
    };
    return figure;
  }));
  $('progress').replaceChildren(...pages.map((_,i) => {
    const button = document.createElement('button'); button.className = i === current ? 'active' : '';
    button.setAttribute('aria-label', `Страница ${i+1}`); if(i===current) button.setAttribute('aria-current','step');
    button.onclick = () => { current = i; render(); }; return button;
  }));
  $('scene').classList.remove('enter'); void $('scene').offsetWidth; $('scene').classList.add('enter');
  window.scrollTo(0,0);
}
function openFriendCard(source,index){
  const page=pages[current], name=page.labels[index];
  const dialog=document.createElement('dialog');dialog.className='friend-dialog friend-letter';
  dialog.classList.toggle('friend-group-letter',index===3);
  dialog.setAttribute('aria-label',`Поздравление — ${name}`);
  const close=document.createElement('button');close.className='close';close.textContent='×';close.setAttribute('aria-label','Закрыть поздравление');
  const picture=document.createElement('div');picture.className='friend-picture';
  const image=source.querySelector('img');
  if(image){const copy=image.cloneNode();copy.alt=name;picture.append(copy);}
  else{const placeholder=document.createElement('span');placeholder.textContent='♡';picture.append(placeholder);const label=document.createElement('small');label.textContent='Здесь будет фотография';picture.append(label);}
  const letter=document.createElement('section');letter.className='friend-letter-copy';
  const overline=document.createElement('span');overline.className='friend-from';overline.textContent='С ТЕПЛОМ, ДЛЯ ТЕБЯ';
  const title=document.createElement('h2');title.textContent=name;
  const text=document.createElement('p');text.textContent=page.photoNotes?.[index] || 'Здесь будет текст поздравления ♡';
  letter.append(overline,title,text);
  close.onclick=()=>dialog.close();dialog.onclick=e=>{if(e.target===dialog)dialog.close();};
  dialog.onclose=()=>{dialog.remove();source.focus({preventScroll:true});};
  const decoration=document.createElement('div');decoration.className='letter-hearts';decoration.setAttribute('aria-hidden','true');
  for(let i=0;i<15;i++){
    const heart=document.createElement('span');heart.textContent='♡';
    heart.style.cssText=`left:${4+Math.random()*91}%;top:${4+Math.random()*88}%;--size:${18+Math.random()*35}px;--tilt:${-23+Math.random()*46}deg;--duration:${7+Math.random()*7}s;--delay:${-Math.random()*14}s`;
    decoration.append(heart);
  }
  dialog.append(decoration,close,picture,letter);document.body.append(dialog);dialog.showModal();close.focus();
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
  if(pages[current].audio){$('audio-dialog').showModal();return;}
  if(current === pages.length-1){$('caption').textContent='Вот она — моя любимая улыбка. С днём рождения, солнышко ♡';burst($('next'),24);return;}
  current++;render();
};
$('back').onclick=()=>{if(current>0){current--;render();}};
document.querySelector('.signature').onclick=e=>{e.preventDefault();current=0;render();};
$('sound').onclick=()=>$('audio-dialog').showModal();
$('close-audio').onclick=()=>$('audio-dialog').close();
$('audio-dialog').addEventListener('close',()=>{
  $('voice').pause();
  if(pages[current].audio && current<pages.length-1){current++;render();}
  else if(pages[current].audio){$('caption').textContent='Обнимаю крепко. С днём рождения, солнышко ♡';}
});
let audioUrl;
$('audio-file').onchange = e => {
  const file=e.target.files[0];if(!file)return;
  if(audioUrl)URL.revokeObjectURL(audioUrl);audioUrl=URL.createObjectURL(file);$('voice').src=audioUrl;
  $('voice').hidden=false;
  $('audio-note').textContent='Запись готова. Нажми ▶, чтобы услышать её.';
};
// Когда запись готова, положите её в assets/voice.mp3 и раскомментируйте:
// $('voice').src = 'assets/voice.mp3';
// $('audio-note').textContent = 'Это сообщение — только для тебя.';
$('voice').addEventListener('loadedmetadata',()=>{$('voice').hidden=false;});
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

// Заставка показывается при каждом входе и обновлении, слайд сохраняется в этой вкладке.
for(let i=0;i<18;i++){
  const heart=document.createElement('span');heart.textContent='♡';
  const right=i%2===1,duration=16+Math.random()*18;
  heart.style.cssText=`--desktop-left:${right?77+Math.random()*18:4+Math.random()*17}%;--mobile-left:${right?90+Math.random()*5:Math.random()*6}%;font-size:${18+Math.random()*23}px;--duration:${duration}s;animation-delay:-${Math.random()*duration}s;--drift:${(Math.random()-.5)*40}px`;
  $('welcome-hearts').append(heart);
}
document.body.classList.add('welcome-open');
const welcomeAssets=pages[current].photos;
let welcomeLoaded=0;
let welcomeReady=false;
function readyWelcome(){
  if(welcomeReady)return;
  welcomeReady=true;
  $('welcome-fill').style.width='100%';
  $('welcome-status').textContent='Всё готово. Этот момент — твой ♡';
  $('envelope-label').textContent='Открой своё письмо ♡';
  $('welcome-start').disabled=false;
}
const welcomeTimeout=setTimeout(readyWelcome,5000);
Promise.all(welcomeAssets.map(photo=>new Promise(resolve=>{
  const image=new Image();
  const finish=()=>{welcomeLoaded++;if(!welcomeReady)$('welcome-fill').style.width=`${welcomeLoaded/welcomeAssets.length*100}%`;resolve();};
  image.onload=finish;image.onerror=finish;image.src=photo.src;
}))).then(()=>{clearTimeout(welcomeTimeout);readyWelcome();});
$('welcome-start').onclick=()=>{
  if(!welcomeReady)return;
  $('welcome-start').disabled=true;
  $('welcome-start').classList.add('is-open');
  $('envelope-label').textContent='С любовью, для тебя…';
  setTimeout(openWelcome,reducedMotion.matches?0:1500);
};
function openWelcome(){
  $('site-content').inert=false;
  $('site-content').removeAttribute('aria-hidden');
  document.body.classList.remove('welcome-open');
  window.scrollTo(0,0);
  $('welcome').inert=true;
  $('welcome').setAttribute('aria-hidden','true');
  $('welcome').classList.add('is-leaving');
  $('next').focus({preventScroll:true});
  const duration=reducedMotion.matches?0:900;
  setTimeout(()=>$('welcome').remove(),duration);
}

// Небольшой след за мышью: ограничен по частоте и количеству частиц.
const finePointer=matchMedia('(hover: hover) and (pointer: fine)');
let lastHeartTime=0;
let lastHeartPoint=null;
const cursorHearts=new Set();
document.addEventListener('pointermove',event=>{
  if(event.pointerType!=='mouse' || !finePointer.matches || reducedMotion.matches)return;
  const now=performance.now();
  if(now-lastHeartTime<65)return;
  if(lastHeartPoint && Math.hypot(event.clientX-lastHeartPoint.x,event.clientY-lastHeartPoint.y)<7)return;
  lastHeartTime=now;lastHeartPoint={x:event.clientX,y:event.clientY};
  if(cursorHearts.size>=28)return;
  const heart=document.createElement('span');heart.className='cursor-heart';heart.textContent='♡';heart.setAttribute('aria-hidden','true');
  heart.style.cssText=`left:${event.clientX}px;top:${event.clientY}px;font-size:${randomBetween(12,24)}px;--dx:${randomBetween(-38,38)}px;--dy:${randomBetween(-85,-35)}px;--tilt:${randomBetween(-35,35)}deg;--life:${randomBetween(800,1300)}ms`;
  document.body.append(heart);cursorHearts.add(heart);
  const remove=()=>{heart.remove();cursorHearts.delete(heart);};
  heart.addEventListener('animationend',remove,{once:true});
  setTimeout(remove,1500);
},{passive:true});
document.addEventListener('pointerleave',()=>{lastHeartPoint=null;});
reducedMotion.addEventListener('change',()=>{
  if(reducedMotion.matches){cursorHearts.forEach(heart=>heart.remove());cursorHearts.clear();}
});



