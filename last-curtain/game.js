const K='last-curtain-case-v1';
const PEOPLE=[
 {id:'actor',name:'민지욱',role:'주연 배우',intro:'3년 전 무대 사고의 진실이 공개되면 경력과 자유를 잃을 수 있다.'},
 {id:'designer',name:'한유리',role:'의상 디자이너',intro:'매각되면 돌아가신 어머니의 의상 원본도 사라질 수 있다.'},
 {id:'manager',name:'백태준',role:'무대 담당',intro:'아들의 수술비로 쓴 공연 수입을 차재원이 알아냈다.'},
 {id:'daughter',name:'차서연',role:'피해자의 친딸',intro:'계약 전 아버지가 죽으면 극장을 상속받아 어머니의 집을 지킬 수 있다.'}
];
const ITEMS={
 wound:['관자놀이 상처','선반 모서리에 부딪힌 듯한 상처. 그러나 상처 주변에 피가 예상보다 적다.'],
 neck:['목과 옷깃','목 아래에 가는 압박 자국이 있다. 옷깃은 한쪽만 거칠게 구겨졌다.'],
 nails:['손톱 밑 조각','손톱 밑에서 작은 검은 플라스틱 조각이 나왔다. 어디서 떨어졌는지는 알 수 없다.'],
 shelf:['넘어진 소품 선반','선반이 시체 위로 넘어져 있다. 바닥의 긁힌 자국은 선반을 옆으로 당긴 흔적처럼 보인다.'],
 tea:['마시다 만 차','차가 반쯤 남았다. 잔 옆에는 피해자가 평소 먹던 약통이 있다.'],
 rope:['풀어진 커튼 줄','붉은 커튼 줄 한 가닥이 소품실 바닥에 떨어져 있다. 끝부분이 거칠게 닳았다.'],
 fabric:['찢긴 의상 천','소품 상자에 걸린 천 조각. 한유리의 작업복과 같은 천이다.'],
 contract:['매각 서류','내일 아침 서명할 극장 매각 계약서. 아직 차재원의 서명은 없다.'],
 stagephoto:['21:30 무대 사진','조명이 돌아온 직후 찍힌 사진. 민지욱이 무대로 돌아온 모습이 보인다. 그의 허리에는 무선 송신기가 달려 있다.'],
 routes:['극장 동선표','암전 중 소품실까지 편도: 무대 옆길 25초, 의상실 30초, 조정실 40초, 로비 45초. 누구나 왕복할 수 있다.'],
 console:['자동 재생 설정','조명과 음향은 21:26부터 21:30까지 사전 설정대로 자동 진행할 수 있다. 담당자가 조정실에 계속 있을 필요는 없다.'],
 headset:['조정실 헤드셋','백태준의 헤드셋. 21:27 대사가 흘러나온 스피커와 연결되어 있다.'],
 key:['여분 열쇠 고리','소품실 여분 열쇠가 빠져 있다. 차서연이 가져갔다는 사실은 아직 확인되지 않았다.'],
 visitor:['로비 출입 사진','21:25 차서연이 소품실 방향 복도에서 돌아오는 모습. 21:26 이후 로비 안쪽은 촬영되지 않았다.'],
 autopsy:['시신 조사 기록','머리 상처는 얕고 출혈이 적어 직접 사인으로 보기 어렵다. 목에는 생전의 압박 흔적이 있다.'],
 lab:['차 성분 검사','차와 약통에서 사망을 일으킬 만한 성분은 확인되지 않았다.'],
 fiber:['줄 섬유 검사','피해자 목과 손톱에서 나온 붉은 섬유가 현장의 커튼 줄과 일치한다.'],
 audio:['21:27 대사 녹음','암전 중 스피커에서 들린 민지욱의 대사. 원본 파일을 확보했다.'],
 rehearsal:['20:45 연습 파일','민지욱이 목을 쉬겠다며 미리 녹음한 짧은 대사. 파일 정보에는 20:45가 찍혀 있다.'],
 ledger:['공연 수입 장부','수입 일부가 빠져 있다. 백태준 아들의 병원비 납부일과 금액이 맞아떨어진다.'],
 sketches:['의상 원본 그림','한유리 어머니의 서명과 날짜가 있다. 차재원이 발표한 그림보다 2년 빠르다.'],
 accident:['3년 전 사고 영상 봉투','차재원이 공연 뒤 경찰에 건네려던 봉투. 3년 전 무대 사고 영상의 보관 목록이 들어 있다. 영상 내용 자체는 아직 열람되지 않는다.'],
 microphone:['무선 마이크 대조 결과','네 송신기를 확인했다. 민지욱의 것만 오른쪽 아래 모서리가 깨져 있고, 피해자 손톱의 조각과 단면이 맞는다.'],
 actor_line:['민지욱의 무대 진술','“21:27 대사는 무대에서 직접 했어요. 암전 내내 자리에 있었죠.”'],
 designer_line:['한유리의 방문 진술','“21:10에 소품실에 갔어요. 원본 그림 때문에 다퉜지만 21:14에 나왔죠.”'],
 manager_line:['백태준의 조정실 진술','“암전 중에는 조정실을 지켰습니다. 장부 때문에 다투긴 했어요.”'],
 daughter_line:['차서연의 로비 진술','“소품실엔 안 갔어요. 21:22부터 계속 로비에 있었어요.”'],
 daughter_truth:['차서연의 정정 진술','“21:22에 서류를 찾으러 소품실에 갔어요. 아버지는 살아 있었고, 21:25에 나왔어요. 겁나서 숨겼어요.”'],
 manager_truth:['백태준의 정정 진술','“그 대사는 녹음해 자동 재생했어요. 규칙을 어긴 게 드러날까 봐 숨겼습니다. 저는 암전 중 복도로 나갔습니다.”'],
 designer_truth:['한유리의 정정 진술','“어머니 그림을 가져가려다 천이 찢어졌어요. 21:14에 나왔습니다. 이후엔 혼자 의상실에 있었어요.”'],
 actor_truth:['민지욱의 정정 진술','“목이 아파 대사를 녹음했어요. 하지만 암전 때 소품실에는 가지 않았습니다.”']
};
const SCENES=[
 {id:'prop',name:'소품실',desc:'21:41 시신 발견. 선반, 차, 커튼 줄이 한곳에 있다.',spots:[['body','시신 조사',47,65],['shelf','선반',29,32],['tea','찻잔',11,55],['rope','커튼 줄',75,79],['fabric','천 조각',72,29],['contract','계약서',20,86]]},
 {id:'stage',name:'무대',desc:'21:26~21:30 암전 리허설. 무대 옆길은 소품실로 통한다.',spots:[['stagephoto','무대 사진',58,40],['routes','동선표',16,68]]},
 {id:'booth',name:'조정실',desc:'불과 소리를 자동으로 재생할 수 있다.',spots:[['console','조정 장치',58,51],['headset','헤드셋',36,75]]},
 {id:'lobby',name:'로비',desc:'비어 있는 안내 데스크와 열쇠함. 복도 카메라는 일부만 찍혔다.',spots:[['key','열쇠함',57,42],['visitor','출입 사진',76,76]]}
];
const RECORDS=[
 {id:'autopsy',name:'시신 조사 기록',need:['wound','neck']},
 {id:'lab',name:'차 성분 검사',need:['tea']},
 {id:'fiber',name:'줄 섬유 검사',need:['neck','rope']},
 {id:'audio',name:'21:27 현장 녹음',need:['headset']},
 {id:'rehearsal',name:'20:45 연습 파일',need:['console'],gate:'recording'},
 {id:'ledger',name:'공연 수입 장부',need:['contract']},
 {id:'sketches',name:'의상 원본 그림',need:['fabric']},
 {id:'accident',name:'3년 전 사고 자료',need:['contract']},
 {id:'microphone',name:'무선 마이크 정밀 대조',need:['nails','stagephoto'],gate:'playback'}
];
const DEDUCTIONS=[
 {id:'head',a:'wound',b:'autopsy',title:'선반이 사인은 아니다',text:'머리 상처는 얕고 출혈이 적다. 선반은 사고처럼 보이게 하는 장치일 수 있다.'},
 {id:'poison',a:'tea',b:'lab',title:'차는 사인이 아니다',text:'차와 약통에는 치명적 성분이 없다.'},
 {id:'cause',a:'neck',b:'fiber',title:'사인은 목 압박',text:'목 자국과 커튼 줄 섬유가 일치한다. 피해자는 줄에 목이 압박되어 숨졌다.'},
 {id:'lastseen',a:'visitor',b:'daughter_truth',title:'피해자는 21:25까지 살아 있었다',text:'서연의 정정 진술과 21:25 복도 사진이 맞는다. 범행은 그 뒤다.'},
 {id:'playback',a:'audio',b:'rehearsal',title:'21:27 대사는 녹음이었다',text:'두 파일의 호흡과 뒤쪽 의자 소리까지 일치한다. 그 대사는 누구의 위치도 증명하지 못한다.'},
 {id:'physical',a:'nails',b:'microphone',title:'손톱 조각의 주인',text:'피해자가 붙잡은 송신기의 깨진 모서리가 민지욱의 장비와 맞는다.'}
];
const Q=[
 ['where','암전된 21:26~21:30에 어디 있었나요?'],['last','차재원을 마지막으로 본 때는?'],['motive','차재원과 갈등이 있었나요?'],['visit','소품실에 들어갔나요?'],['sound','둔탁한 소리를 들었나요?'],
 ['fabricq','찢긴 천은 왜 소품실에 있나요?','fabric','designer'],['keyq','여분 열쇠는 누가 가져갔나요?','key','daughter'],
 ['ledgerq','장부의 빈돈을 설명해 주세요.','ledger','manager'],['accidentq','3년 전 사고 영상을 아나요?','accident','actor'],
 ['photoq','21:25 사진과 로비 진술이 다릅니다.','visitor','daughter'],
 ['recordq','대사가 녹음된 걸 확인했습니다.','', 'manager','playback'],
 ['actorq','무대 대사가 녹음된 걸 확인했습니다.','', 'actor','playback'],
 ['fiberq','커튼 줄이 사인이라는 결과를 봤나요?','fiber']
];
const ANSWERS={
 actor:{where:'“무대에 있었죠. 대사도 들렸잖아요.”',last:'“공연 전, 21시 전쯤요.”',motive:'“옛 사고라니… 그건 이제 끝난 일입니다.”',visit:'“소품실엔 가지 않았습니다.”',sound:'“어둠 속에서 무언가 넘어진 소리가 났어요.”',accidentq:'“그 봉투를 경찰에 준다고요? 저는 몰랐습니다.”',actorq:'“그래요, 목이 아파 녹음했습니다. 그래도 소품실에는 안 갔어요.”',fiberq:'“그 줄은 무대 곳곳에 있습니다.”'},
 designer:{where:'“의상실에 있었어요. 혼자였으니 증인은 없죠.”',last:'“21:14쯤. 살아 있었어요.”',motive:'“어머니 그림을 훔쳐 자기 이름을 붙였어요. 내일 팔리면 영영 못 찾습니다.”',visit:'“가긴 했어요. 원본을 달라고 다퉜습니다.”',sound:'“의상실에서도 들렸어요. 소품실 쪽이었죠.”',fabricq:'“상자에 걸려 찢어졌어요. 제가 21:10에 갔던 흔적입니다.”',fiberq:'“커튼 줄은 의상실에도 있어요. 그게 저를 뜻하진 않죠.”'},
 manager:{where:'“조정실에서 불을 관리했습니다.”',last:'“21:20에 장부 때문에 다퉜습니다. 그때는 살아 있었어요.”',motive:'“아들 수술비가 급했습니다. 돌려놓으려 했어요.”',visit:'“21:16쯤 갔다가 21:20에 나왔습니다.”',sound:'“헤드셋으로 대사가 들려, 다른 소리는 희미했어요.”',ledgerq:'“제가 가져갔습니다. 수술비였습니다. 들키면 끝장인 것도 압니다.”',recordq:'“녹음을 자동 재생했습니다. 규칙 위반이라 숨겼어요. 암전 중 복도에도 나갔습니다.”',fiberq:'“줄은 제가 관리하죠. 누구든 가져갈 수 있었습니다.”'},
 daughter:{where:'“로비에 있었어요.”',last:'“아버지를 저녁에 본 뒤론 못 봤어요.”',motive:'“내일 팔면 엄마가 위층 집에서 쫓겨나요. 아버지와 이혼했지만 제 엄마예요. 저는 친딸이고, 계약 전에 아버지가 죽으면 극장을 상속받아 매각을 막을 수 있어요.”',visit:'“들어가지 않았어요.”',sound:'“로비에서도 쿵 소리가 났어요.”',keyq:'“그 열쇠… 제가 가져갔습니다. 서류를 찾으려고요.”',photoq:'“맞아요. 21:22에 소품실에 갔어요. 아버지는 살아 있었고 21:25에 나왔어요. 겁나서 숨겼어요.”',fiberq:'“아버지에게 무슨 일이 있었는지 몰랐어요.”'}
};
const PRESENT={
 fabric:{designer:['“천을 숨겼어요. 어머니 그림을 찾다 찢어졌습니다.”','designer_truth']},
 ledger:{manager:['“돈은 수술비에 썼습니다. 조정실에 있었다는 말은 별개예요.”',null]},
 visitor:{daughter:['“사진이 맞아요. 21:25에 살아 있는 아버지를 두고 나왔습니다.”','daughter_truth']},
 key:{daughter:['“제가 가져갔어요. 계약서를 빼돌릴 생각이었습니다.”',null]},
 audio:{manager:['“녹음이었다고 단정할 수 있나요? 연습 파일을 찾아보세요.”','recording']},
 rehearsal:{manager:['“미리 튼 건 맞습니다. 혼날까 봐 숨겼어요.”','manager_truth']},
 accident:{actor:['“그 영상 때문에 제 인생이 끝날 수 있어요. 하지만 죽이진 않았습니다.”',null]},
 microphone:{actor:['“깨진 이유는 모르겠습니다. 그 조각이 거기 있었다고요?”',null]}
};
const blank=()=>({view:'intro',scene:'prop',person:null,detail:null,bodyfocus:null,dialogue:'',record:null,found:[],done:[],unlocked:[],result:null});
let S;try{S={...blank(),...JSON.parse(localStorage.getItem(K)||'{}')}}catch{S=blank()}
const $=s=>document.querySelector(s),has=x=>S.found.includes(x),done=x=>S.done.includes(x),unlock=x=>S.unlocked.includes(x),label=x=>ITEMS[x]?.[0]||x;
const ART={wound:0,autopsy:0,neck:1,nails:2,rope:3,fiber:3,tea:4,lab:4,fabric:5,sketches:5,contract:6,accident:6,ledger:6,audio:7,rehearsal:7,console:7,headset:7,microphone:8,stagephoto:8,shelf:0,routes:6,key:6,visitor:6,actor_line:7,designer_line:5,manager_line:7,daughter_line:6,daughter_truth:6,manager_truth:7,designer_truth:5,actor_truth:7};
function art(id,extra=''){let n=ART[id]??6;return '<div class="evidence-art '+extra+'" role="img" aria-label="'+label(id)+' 그림" style="background-position:'+(n%3*50)+'% '+(Math.floor(n/3)*50)+'%"></div>'}
function save(){localStorage.setItem(K,JSON.stringify(S))}
function toast(t){let n=$('#toast');n.textContent=t;n.classList.add('show');clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>n.classList.remove('show'),2800)}
function add(x){if(!has(x)){S.found.push(x);toast('증거함에 추가: '+label(x))}}
function head(k,t,d=''){return '<div class="head"><small class="eyebrow">'+k+'</small><h1>'+t+'</h1><p>'+d+'</p></div>'}
function btn(view,t,secondary=false){return '<button class="btn'+(secondary?' secondary':'')+'" data-view="'+view+'">'+t+'</button>'}
function intro(){return head('CASE FILE / 02','막이 내리기 전','새 이야기 · 예상 25~40분 · 자동 저장')+'<div class="hero"><div class="inner"><span class="tag">은하극장 · 마지막 공연의 밤</span><h2>소품실에서<br>누가 죽였을까?</h2><p>연출가 차재원이 21:41 넘어진 선반 아래서 발견됐다. 머리 상처, 반쯤 남은 차, 풀어진 커튼 줄. 사인부터 밝혀야 한다.</p></div></div><div class="cards"><div class="card"><small>21:26~21:30</small><h3>4분간의 암전</h3><p>어둠 속에서 배우의 대사와 둔탁한 소리가 들렸다. 그러나 모습을 본 사람은 없다.</p></div><div class="card"><small>네 사람</small><h3>모두에게 절박한 이유</h3><p>누구나 소품실까지 갈 수 있다. 각자의 말을 증거로 확인하자.</p></div></div><div class="actions">'+btn('scene','현장 수색 시작')+btn('people','용의자 만나기',true)+'</div>'}
function scene(){let sc=SCENES.find(x=>x.id===S.scene),pins=sc.spots.map(([id,t,x,y])=>'<button class="pin '+(has(id)?'found':'')+'" style="left:'+x+'%;top:'+y+'%" data-spot="'+id+'">'+(has(id)?'✓ ':'+ ')+t+'</button>').join('');let detail='';if(S.detail==='body')detail='<div class="notice detail"><strong>차재원의 시신</strong><p>눈에 보이는 부위를 각각 조사하세요.</p><div class="body-actions">'+[['wound','머리 상처'],['neck','목과 옷깃'],['nails','쥔 손과 손톱']].map(([id,t])=>'<button class="btn secondary" data-body="'+id+'">'+(has(id)?'✓ ':'+ ')+t+'</button>').join('')+'</div>'+(S.bodyfocus?'<div class="closeup detail">'+art(S.bodyfocus)+'<div><strong>'+label(S.bodyfocus)+'</strong><p>'+ITEMS[S.bodyfocus][1]+'</p></div></div>':'')+'</div>';else if(S.detail)detail='<div class="notice detail closeup">'+art(S.detail)+'<div><strong>'+label(S.detail)+'</strong><p>'+ITEMS[S.detail]?.[1]+'</p></div></div>';return head('FIELD SEARCH','현장 수색','그림 위의 표시를 눌러 조사하세요. 시신은 부위별로 살펴볼 수 있습니다.')+'<div class="tabs">'+SCENES.map(x=>'<button class="'+(x.id===sc.id?'active':'')+'" data-scene="'+x.id+'">'+x.name+'</button>').join('')+'</div><div class="scene-art '+sc.id+'">'+pins+'</div><p class="caption">'+sc.desc+'</p>'+detail}
function people(){if(!S.person)return head('INTERROGATION','용의자 심문','처음에는 누구의 말도 완전히 믿을 수 없습니다. 증거를 얻으면 새 질문이 열립니다.')+'<div class="people-grid">'+PEOPLE.map(p=>'<button class="person" data-person="'+p.id+'"><span class="portrait small '+p.id+'"></span><span><h3>'+p.name+'</h3><p>'+p.role+'</p><p>'+p.intro+'</p></span></button>').join('')+'</div>';let p=PEOPLE.find(x=>x.id===S.person),qs=Q.filter(q=>(!q[2]||has(q[2]))&&(!q[3]||q[3]===p.id)&&(!q[4]||done(q[4]))),opts=S.found.filter(x=>PRESENT[x]).map(x=>'<option value="'+x+'">'+label(x)+'</option>').join('');return head('INTERROGATION / '+p.role,p.name,p.intro)+'<button class="ghost" data-back>← 용의자 목록</button><div class="interview"><div class="portrait large '+p.id+'"></div><div class="speech"><strong>'+p.name+'</strong><p>'+ (S.dialogue||'질문을 고르면 이곳에 답변이 나타납니다.')+'</p></div></div><h2>질문</h2>'+qs.map((q,i)=>'<button class="question" data-q="'+q[0]+'">'+String(i+1).padStart(2,'0')+'　'+q[1]+'</button>').join('')+'<h2>증거 제시</h2><div class="row"><select id="present"><option value="">증거 선택</option>'+opts+'</select><button class="btn" data-present>제시하기</button></div>'}
function records(){let cards=RECORDS.map(r=>{let ok=r.need.every(has)&&(!r.gate||unlock(r.gate)||done(r.gate));let missing=r.need.filter(x=>!has(x)).map(label);if(r.gate&&!unlock(r.gate)&&!done(r.gate))missing.push('관련 증거 대조');return '<button class="record '+(ok?'':'locked')+'" data-record="'+r.id+'"><small>'+(ok?'열람 가능':'잠김')+'</small><h3>'+r.name+'</h3><p>'+(ok?(has(r.id)?'✓ 확인함':'눌러서 확인'):'먼저 확인: '+missing.join(' · '))+'</p></button>'}).join('');return head('ARCHIVE','CCTV · 조사 기록','현장 조사와 증거 제시로 관련 기록이 열립니다.')+'<div class="records">'+cards+'</div>'+(S.record?'<div class="paper closeup">'+art(S.record)+'<div><strong>'+label(S.record)+'</strong><p>'+ITEMS[S.record][1]+'</p></div></div>':'')}
function spent(id){let ds=DEDUCTIONS.filter(d=>d.a===id||d.b===id);return ds.length>0&&ds.every(d=>done(d.id))}
function locker(){return head('EVIDENCE LOCKER','증거함','증거를 눌러 확대해 보세요. 대조를 마친 증거에는 ×가 표시됩니다.')+(S.found.length?'<div class="list">'+S.found.map(id=>'<button class="item '+(spent(id)?'spent':'')+'" data-inspect="'+id+'"><div class="icon">'+(spent(id)?'×':'▣')+'</div>'+art(id,'thumb')+'<div><small>'+ (RECORDS.some(r=>r.id===id)?'조사 기록':id.endsWith('_line')||id.endsWith('_truth')?'진술':'현장 단서')+'</small><h3>'+label(id)+'</h3><p>'+ITEMS[id][1]+'</p></div></button>').join('')+'</div>':'<div class="notice">아직 증거가 없습니다. 현장을 눌러 보세요.</div>')}
function board(){let opts=S.found.map(x=>'<option value="'+x+'" '+(spent(x)?'disabled':'')+'>'+(spent(x)?'× ':'')+label(x)+'</option>').join('');return head('DEDUCTION BOARD','추리 보드','관련 있는 증거 두 개를 대조해 결론을 내세요.')+'<div class="formula"><select id="a"><option value="">첫 번째 증거</option>'+opts+'</select><span>＋</span><select id="b"><option value="">두 번째 증거</option>'+opts+'</select><button class="btn" data-combine>대조하기</button></div><div class="notice">풀어야 할 질문: 무엇 때문에 죽었나? 마지막 생존 시각은? 암전 중 들린 대사는 알리바이인가? 손톱의 조각은 누구 것인가?</div><h2>확인한 결론 '+S.done.length+' / '+DEDUCTIONS.length+'</h2>'+S.done.map(x=>{let d=DEDUCTIONS.find(y=>y.id===x);return '<div class="deduction"><h3>◇ '+d.title+'</h3><p>'+d.text+'</p></div>'}).join('')}
function select(id,title,arr){return '<div class="field"><label for="'+id+'">'+title+'</label><select id="'+id+'"><option value="">선택하세요</option>'+arr.map(([v,t])=>'<option value="'+v+'">'+t+'</option>').join('')+'</select></div>'}
function finale(){let core=['head','poison','cause','lastseen','playback','physical'],n=core.filter(done).length;return head('FINAL REPORT','최종 지목','사인, 시각, 범인, 동기와 알리바이 수법을 모두 설명하세요.')+'<div class="notice">핵심 추리 '+n+' / 6. 결론이 부족하면 정답은 공개되지 않습니다.</div><div class="field-grid">'+select('f-cause','사망 원인',[['fall','선반 사고'],['poison','차에 탄 독'],['blunt','머리 가격'],['rope','커튼 줄로 목 압박']])+select('f-time','범행 시각',[['early','21:10~21:14'],['middle','21:16~21:20'],['blackout','21:26~21:30'],['late','21:41 이후']])+select('f-person','범인',PEOPLE.map(p=>[p.id,p.name]))+select('f-motive','결정적 동기',[['archive','어머니 의상 그림의 소실'],['money','가져간 공연 수입 발각'],['home','극장 상속과 어머니의 집'],['accident','3년 전 고의 무대 사고 폭로']])+select('f-alibi','거짓 알리바이의 방법',[['camera','로비 사진의 사각지대'],['cloth','의상실 천 조각'],['booth','조정실 자동 조명'],['voice','사전 녹음한 무대 대사']])+'</div><div class="actions"><button class="btn" data-verdict>수사 보고서 제출</button></div>'+(S.result?'<div class="result"><h2>'+(S.result==='win'?'사건 해결':'아직 설명이 맞지 않습니다')+'</h2><p>'+(S.result==='win'?'민지욱은 3년 전 자신이 고의로 무대 장치를 느슨하게 만든 영상이 공개되는 것을 막으려 했다. 20:45 녹음한 대사를 21:27 스피커로 틀어 무대에 있는 듯 꾸민 뒤, 암전 중 소품실에서 차재원을 커튼 줄로 살해했다. 선반을 넘어뜨려 사고처럼 보이게 했다. 피해자 손톱의 플라스틱 조각은 지욱의 무선 송신기에서 떨어진 것이다.':'선택한 항목 중 수사 기록과 맞지 않는 것이 있습니다. 어느 항목인지는 밝히지 않습니다.')+'</p></div>':'')}
function next(){if(S.result==='win')return '사건을 해결했습니다.';if(!has('wound')||!has('neck')||!has('nails'))return '소품실의 시신을 눌러 머리·목·손톱을 각각 조사하세요.';if(!has('autopsy')||!has('fiber'))return '현장 물건을 조사하고 시신·줄 관련 기록을 열어 보세요.';if(!done('cause'))return '목의 흔적과 줄 섬유 검사를 대조해 사인을 밝혀 보세요.';if(!has('visitor')||!has('daughter_truth'))return '로비 사진을 확인하고 차서연에게 제시하세요.';if(!done('playback'))return '조정실을 조사하고 21:27 녹음과 연습 파일을 대조하세요.';if(!has('microphone'))return '손톱 조각과 무대 사진을 확보했다면 마이크 정밀 대조를 열어 보세요.';return '추리 보드의 결론을 완성한 뒤 최종 보고서를 제출하세요.'}
function render(){let views={intro,scene,people,records,locker,board,final:finale};$('#main').innerHTML=(views[S.view]||intro)();document.querySelectorAll('nav [data-view]').forEach(b=>b.classList.toggle('active',b.dataset.view===S.view));$('#count').textContent=S.found.length;$('#progress').textContent='증거 '+S.found.length+' · 추리 '+S.done.length+'/6';$('#memo').innerHTML='<h3>다음 할 일</h3><p>'+next()+'</p><h3>확인한 추리</h3><ul>'+DEDUCTIONS.map((d,i)=>'<li>'+(done(d.id)?'✓ '+d.title:'◇ '+['머리 상처의 의미','차의 성분','진짜 사인','마지막 생존 시각','암전 중 들린 대사','손톱 조각의 출처'][i])+'</li>').join('')+'</ul><p>진행은 이 브라우저에 자동 저장됩니다.</p>';save()}
document.addEventListener('click',e=>{
 let t=e.target.closest('[data-view]');if(t){S.view=t.dataset.view;S.detail=null;render();return}
 t=e.target.closest('[data-scene]');if(t){S.scene=t.dataset.scene;S.detail=null;render();return}
 t=e.target.closest('[data-spot]');if(t){S.detail=t.dataset.spot;if(S.detail!=='body')add(S.detail);render();return}
 t=e.target.closest('[data-body]');if(t){add(t.dataset.body);S.detail='body';S.bodyfocus=t.dataset.body;render();return}
 t=e.target.closest('[data-inspect]');if(t){let id=t.dataset.inspect;$('#modal').innerHTML='<div class="modal-card"><button class="ghost modal-close" data-close>닫기 ×</button>'+art(id,'big')+'<h2>'+label(id)+'</h2><p>'+ITEMS[id][1]+'</p></div>';$('#modal').hidden=false;return}
 if(e.target.closest('[data-close]')||e.target.id==='modal'){$('#modal').hidden=true;return}
 t=e.target.closest('[data-person]');if(t){S.person=t.dataset.person;S.dialogue='';render();return}
 if(e.target.closest('[data-back]')){S.person=null;S.dialogue='';render();return}
 t=e.target.closest('[data-q]');if(t){let id=t.dataset.q;S.dialogue=ANSWERS[S.person]?.[id]||'“그 질문에는 더 할 말이 없습니다.”';if(id==='where')add(S.person+'_line');if(S.person==='daughter'&&id==='photoq')add('daughter_truth');if(S.person==='manager'&&id==='recordq')add('manager_truth');if(S.person==='actor'&&id==='actorq')add('actor_truth');if(S.person==='designer'&&id==='fabricq')add('designer_truth');render();return}
 t=e.target.closest('[data-record]');if(t){let r=RECORDS.find(x=>x.id===t.dataset.record);if(!r.need.every(has)||r.gate&&!unlock(r.gate)&&!done(r.gate)){toast('필요한 현장 조사와 추리를 먼저 마치세요.');return}add(r.id);S.record=r.id;render();return}
 if(e.target.closest('[data-present]')){let id=$('#present').value;if(!id){toast('증거를 고르세요.');return}let v=PRESENT[id]?.[S.person];S.dialogue=v?.[0]||'“그 증거에 대해서는 더 말할 게 없습니다.”';if(v?.[1]){if(ITEMS[v[1]])add(v[1]);else if(!unlock(v[1]))S.unlocked.push(v[1])}render();return}
 if(e.target.closest('[data-combine]')){let a=$('#a').value,b=$('#b').value;if(!a||!b||a===b){toast('서로 다른 증거 두 개를 고르세요.');return}let d=DEDUCTIONS.find(x=>x.a===a&&x.b===b||x.a===b&&x.b===a);if(!d){toast('이 둘로는 결론을 내릴 수 없습니다.');return}if(!done(d.id)){S.done.push(d.id);toast('새 결론: '+d.title)}render();return}
 if(e.target.closest('[data-verdict]')){let vals=['cause','time','person','motive','alibi'].map(x=>$('#f-'+x).value);if(vals.some(x=>!x)){toast('모든 항목을 선택하세요.');return}S.result=DEDUCTIONS.every(d=>done(d.id))&&vals.join('|')==='rope|blackout|actor|accident|voice'?'win':'fail';render();return}
});
$('#reset').addEventListener('click',()=>{if(confirm('지금까지의 수사를 지우고 처음부터 시작할까요?')){S=blank();render()}});render();
