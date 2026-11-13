const D=window.CASE05, KEY='last-shutter-case05-v1';
const EV=D.evidence;
const SCENES=[
 {id:'print',name:'2층 인화실',desc:'정서원 대표가 발견된 곳. 인화기와 전시 소품이 함께 있다.',spots:[['body','시신 조사',42,72],['E01','황동 받침',70,78],['E02','손 옆의 종이',31,79],['E03','파란 천',18,48],['E04','마지막 사진',80,47],['E07','대표 휴대전화',27,25],['E10','점검 수첩',73,24]]},
 {id:'gallery',name:'1층 전시 벽',desc:'내일 전시할 사진이 걸려 있다. 오래된 P-12 사진이 눈에 띈다.',spots:[['E11','P-12 사진',52,37],['E12','액자 뒷면',60,63],['E13','액자 뒤 봉투',72,72],['E20c','소품 상자',18,80]]},
 {id:'archive',name:'2층 원본 보관실',desc:'사진 원본과 과거 계약 자료를 보관하는 방.',spots:[['E14','보관 노트',26,76],['E15','빈 보관 칸',63,42],['E16','흐트러진 파일',80,70]]},
 {id:'edit',name:'2층 편집 코너',desc:'작은 컴퓨터와 프린터가 있다. 송다은이 쓰던 자리다.',spots:[['E17','컴퓨터 휴지통',42,59],['E18a','프린터 메모',76,63],['E18b','휴대전화 녹음',66,31]]},
 {id:'gear',name:'2층 장비실',desc:'사진관 공용 렌즈와 전시 소품이 모여 있다.',spots:[['E19','소품 준비표',28,68],['E20a','렌즈 번호표',68,65],['E20b','대여 문자',77,30]]},
 {id:'office',name:'1층 사무공간',desc:'전시 자료와 네 직원의 개인 물건이 있다.',spots:[['E18','광고사 정산 자료',23,72],['E22','회의 메모',71,77],['E23','류시온 가방',28,29],['E24','송다은 메모',47,30],['E25','한미래 보관함',70,31],['E20b','오재필 휴대전화',48,54],['E27p','옷과 서류의 점',83,54]]}
];
const RECORDS=[
 {id:'E31',name:'1층 출입 CCTV',hint:'출입 카메라 열람'},
 {id:'E32',name:'2층 계단 CCTV',hint:'계단 카메라 열람'},
 {id:'E05',name:'프린터 출력 순서',hint:'마지막 사진을 먼저 조사'},
 {id:'E06',name:'카메라 원본 시각',hint:'마지막 사진을 먼저 조사'},
 {id:'E08',name:'인쇄업체 통화 확인',hint:'대표 휴대전화를 먼저 조사'},
 {id:'E09',name:'대표가 보낸 문자 복원',hint:'대표 휴대전화를 먼저 조사'},
 {id:'E01a',name:'황동 받침 감식',hint:'황동 받침을 먼저 조사'},
 {id:'E33',name:'시신 발견 이후 기록',hint:'출입·계단 CCTV를 먼저 확인'},
 {id:'E26',name:'찢어진 종이 맞춰 보기',hint:'두 곳의 종이 조각을 찾기'},
 {id:'E28',name:'두 사용 허락서 비교',hint:'원본 허락서와 광고료 서류를 찾기'},
 {id:'E29',name:'광고사·사진 모델 확인',hint:'두 허락서를 비교한 뒤 확인'},
 {id:'E30',name:'네 사람의 소지품 수색',hint:'사건 시각과 다른 진술의 모순을 확인'},
 {id:'E27',name:'갈색 점 감식 의뢰',hint:'옷과 서류의 갈색 점을 먼저 발견'},
 {id:'E34',name:'보관함 앞 영상',hint:'소지품 수색 뒤 열람'}
];
const BOARD=[
 {id:'R01',title:'사진 뒷면의 21:49',need:['E04','E05','E06'],result:'21:49는 종이가 나온 때다. 사진은 훨씬 전에 찍혔다.'},
 {id:'R02',title:'큰 소리가 난 시간',need:['E01','E08','E18b'],result:'대표는 21:41에 살아 있었다. 21:44 무렵 무거운 금속 소리가 났다.'},
 {id:'R03',title:'황동 받침의 지문',need:['E01a','E19'],result:'오후에 만진 사실만 확인된다. 밤에 누가 사용했는지는 알 수 없다.'},
 {id:'R04',title:'서로 다른 사진 허락서',need:['E13','E18','E28'],result:'원본은 외부 광고를 허락하지 않았다. 새 문서의 출처를 확인해야 한다.'},
 {id:'R05',title:'두 곳에서 나온 종이',need:['E02','E25','E26'],result:'현장 조각과 개인 파일의 문서는 한 장이었다.'},
 {id:'R06',title:'옷과 서류에 묻은 피',need:['E09','E26','E27','E33'],confront:'A2',result:'한미래는 발견 뒤 현장에 들어가지 않았다. 피 묻은 문서는 사건 전후 인화실에 있었다.'},
 {id:'R07',title:'7,200만 원의 행방',need:['E13','E18','E29'],result:'모델이 허락하지 않은 광고의 사용료가 한미래의 개인 사업 계좌로 갔다.'}
];
const CONFRONT={
 A:[['A1','E09'],['A2','E26'],['A3','E27'],['A4','E29']],
 B:[['B1','E15'],['B2','E23']],C:[['C1','E32'],['C2','E17'],['C3','E18b']],
 D:[['D1','E20a'],['D2','E20b'],['D3','E01a']]
};
const ART_GROUPS=[
 ['E01','E02','E03','E04','E05','E06','E07','E08','E09'],
 ['E10','E11','E12','E13','E14','E15','E16','E17','E18a'],
 ['E18b','E19','E20a','E20b','E20c','E18','E22','E23','E24'],
 ['E25','E26','E27','E28','E29','E30','E31','E32','E33'],
 ['E34','E01a','E27p']
];
function art(id,cls=''){if({E04:'photo-print.png',E06:'camera-original.png',E26:'paper-match.png'}[id])return '<span class="e-art '+cls+'" role="img" aria-label="'+esc(EV[id].label)+' 그림" style="background-image:url(assets/'+({E04:'photo-print.png',E06:'camera-original.png',E26:'paper-match.png'}[id])+');background-size:cover;background-position:center"></span>';let g=ART_GROUPS.findIndex(x=>x.includes(id));if(g<0)g=0;let n=ART_GROUPS[g].indexOf(id),size=g===4?2:3,xy=[(n%size)*100/(size-1),Math.floor(n/size)*100/(size-1)];return '<span class="e-art '+cls+'" role="img" aria-label="'+esc(EV[id]?.label||'증거')+' 그림" style="background-image:url(assets/evidence'+(g+1)+'.png);background-size:'+(size*100)+'% '+(size*100)+'%;background-position:'+xy[0]+'% '+xy[1]+'%"></span>'}
const BASE_IDS=Object.keys(D.baseLabels), BASE_TOTAL=BASE_IDS.length*Object.keys(D.people).length;
const fresh=()=>({view:'intro',introStep:0,introDone:false,askedBase:[],activeQuestion:null,questionTab:'base',scene:'print',person:null,detail:null,bodypart:null,record:null,dialogue:'',found:[],examined:[],sceneOpened:[],solved:[],confronted:[],boardDraft:{},boardPicker:null,boardFeedback:{},result:null});
let S,saved;try{saved=JSON.parse(localStorage.getItem(KEY)||'null');S={...fresh(),...saved}}catch{S=fresh()}
if(saved&&!('introDone' in saved)){
 const progressed=(saved.found?.length||0)>0||(saved.solved?.length||0)>0;
 if(progressed){S.introDone=true;S.askedBase=Object.keys(D.people).flatMap(person=>BASE_IDS.map(q=>person+':'+q))}
 else{S.view='intro';S.introStep=0}
}
if(!Array.isArray(S.askedBase))S.askedBase=[];
if(!Array.isArray(S.examined))S.examined=[];
if(!Array.isArray(S.sceneOpened))S.sceneOpened=[];
if(!S.boardDraft||typeof S.boardDraft!=='object')S.boardDraft={};
if(!S.boardFeedback||typeof S.boardFeedback!=='object')S.boardFeedback={};
const $=x=>document.querySelector(x),has=x=>S.found.includes(x),solved=x=>S.solved.includes(x),met=x=>S.confronted.includes(x),label=x=>EV[x]?.label||x;
const baseCount=(person)=>BASE_IDS.filter(q=>S.askedBase.includes(person+':'+q)).length;
const allBaseAsked=()=>Object.keys(D.people).every(person=>baseCount(person)===BASE_IDS.length);
function esc(x){return String(x).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function notify(t){let x=$('#toast');x.textContent=t;x.classList.add('show');clearTimeout(window.tt);window.tt=setTimeout(()=>x.classList.remove('show'),3000)}
function add(id){if(!has(id)){S.found.push(id);notify('증거 확보: '+label(id))}}
function can(id){let e=EV[id];if(!e)return false;if(id==='E30')return has('E32')&&solved('R02')&&['E17','E20a','E09'].filter(has).length>=2;if(!(e.need||[]).every(x=>x.startsWith('R')?solved(x):has(x)))return false;if(id==='E20b')return met('D1');return true}
function save(){localStorage.setItem(KEY,JSON.stringify(S))}
function head(k,t,d){return '<div class="head"><small class="eyebrow">'+k+'</small><h1>'+t+'</h1><p>'+d+'</p></div>'}
function goto(v,t,secondary=false){return '<button class="btn'+(secondary?' secondary':'')+'" data-view="'+v+'">'+t+'</button>'}
function intro(){
 const slides=[
  {k:'2026년 11월 7일 · 성수동',title:'불이 꺼지지 않은 사진관',text:'열두번째 사진관은 개업 10주년 전시를 하루 앞두고 있었다. 직원들은 늦은 밤까지 사진과 액자를 정리했다.',art:'studio'},
  {k:'그날 밤',title:'정서원의 마지막 작업',text:'대표 정서원(46)은 사진관의 대표작인 인물 사진 P-12를 전시할 준비를 했다. 직원들은 늦은 밤까지 사진과 액자를 정리했다.',art:'owner'},
  {k:'그런데, 밤 9시 57분',title:'열린 인화실 문',text:'전시 출력물을 가지러 2층 인화실에 들어간 직원은 바닥에 쓰러진 정서원을 발견했다. 대표는 이미 숨져 있었다. 정확한 사인은 아직 알 수 없었다.',art:'discovery'},
  {k:'수사의 시작',title:'그날 밤 남아 있던 네 사람',text:'공동대표, 사진가, 보정 담당, 장비 담당. 네 사람 모두 대표와 격하게 다퉜지만, 누구도 다시 만났다고 말하지 않는다. 먼저 그날 밤의 이야기를 들어 보자.',art:'suspects'}
 ];
 const n=Math.max(0,Math.min(S.introStep||0,slides.length-1)),s=slides[n];
 const art=s.art==='suspects'?'<div class="intro-suspects">'+Object.keys(D.people).map(id=>'<span class="portrait '+id+'" role="img" aria-label="'+esc(D.people[id])+'"></span>').join('')+'</div>':'<div class="intro-image '+s.art+'" role="img" aria-label="'+esc(s.title)+' 그림"></div>';
 return '<div class="intro-screen"><div class="intro-art">'+art+'</div><div class="intro-progress">CASE 05 · '+(n+1)+' / '+slides.length+'</div><div class="intro-copy"><small class="eyebrow">'+s.k+'</small><h1>'+s.title+'</h1><p>'+s.text+'</p><div class="intro-controls">'+(n?'<button class="btn secondary" data-intro-prev>← 이전 장면</button>':'')+'<button class="btn" data-intro-next>'+(n===slides.length-1?'심문 시작':'다음 장면 →')+'</button></div></div></div>';
}
function brief(){return head('CASE FILE / 05','마지막 셔터','열두번째 사진관 · 10주년 전시 전날 밤 · 진행 자동 저장')+'<div class="hero"><div class="hero-inner"><span class="tag">성수동 · 2026년 11월 7일</span><h2>사진은 남았는데,<br>그날 밤은 비어 있다.</h2><p>밤 9시 57분, 대표 정서원(46)이 2층 인화실에서 숨진 채 발견됐다. 현장에는 전시 준비 물건이 어지럽게 놓여 있다. 사인은 아직 확인되지 않았다. 검시 시각은 9시 25분~55분으로 넓다. 방 문은 CCTV에 보이지 않는다.</p></div></div><div class="grid" style="margin-top:12px"><div class="card"><small>마지막 사진</small><h3>뒷면에는 21:49</h3><p>사진 속 거울에는 대표의 모습이 있다. 이 시각이 정확히 무엇을 뜻하는지 조사하자.</p></div><div class="card"><small>수사 원칙</small><h3>누구나 인화실에 들어갈 수 있다</h3><p>각자 숨기는 일이 있다. 거짓말 하나로 살인범을 단정하지 말자.</p></div></div><div class="actions">'+goto('scene','현장 수색 시작')+goto('interview','용의자 만나기',true)+'</div>'}
function scene(){let sc=SCENES.find(x=>x.id===S.scene);let opened=S.examined.some(key=>key.startsWith(sc.id+':'));let markers=sc.spots.map(([id,l,x,y],i)=>'<button class="marker '+((S.examined.includes(sc.id+':'+id))?'found':'')+' '+(id!=='body'&&!can(id)?'locked':'')+'" style="left:'+x+'%;top:'+y+'%" data-spot="'+id+'" aria-label="'+esc(l)+'">'+(i+1)+'</button>').join('');let objects=sc.spots.filter(([id])=>S.examined.includes(sc.id+':'+id)).map(([id,l])=>'<button class="object '+((S.examined.includes(sc.id+':'+id))?'found':'')+' '+(id!=='body'&&!can(id)?'locked':'')+'" data-spot="'+id+'"><i>'+String(sc.spots.findIndex(([spotId])=>spotId===id)+1).padStart(2,'0')+'</i> '+esc(id!=='body'&&has(id)?label(id):l)+(id!=='body'&&!can(id)?' ◇':id!=='body'&&has(id)?' ✓':'')+'</button>').join('');let detail='';if(S.detail==='body')detail='<div class="notice detail"><div><strong>정서원의 시신</strong><p>눈에 띄는 부위를 하나씩 확인한다.</p><div class="actions">'+[['head','머리 뒤쪽'],['hand','손 주변'],['clothes','옷과 소지품']].map(([id,l])=>'<button class="btn secondary" data-bodypart="'+id+'">'+l+'</button>').join('')+'</div>'+(S.bodypart?'<p>'+({head:'머리 뒤쪽에 찢어진 상처와 굳은 피가 보인다. 어떻게 생긴 상처인지는 아직 알 수 없다.',hand:'손 가까이에 작은 종이 조각이 떨어져 있다. 끝이 불규칙하게 찢겨 있다.',clothes:'옷에는 누군가를 바로 가리킬 만한 물건은 보이지 않는다.'})[S.bodypart]+'</p>':'')+'</div></div>';else if(S.detail&&has(S.detail))detail='<div class="notice detail">'+art(S.detail)+'<div><strong>'+esc(label(S.detail))+'</strong><p>'+esc(EV[S.detail].text)+'</p><button class="btn secondary" data-inspect="'+S.detail+'">크게 보기</button></div></div>';return head('FIELD SEARCH','현장 수색','그림의 번호를 눌러 조사하세요. 누른 번호의 항목만 아래 목록에 추가됩니다.')+'<div class="tabs">'+SCENES.map(x=>'<button class="'+(sc.id===x.id?'active':'')+'" data-scene="'+x.id+'">'+x.name+'</button>').join('')+'</div><div class="scene-art '+sc.id+'">'+markers+'</div><p class="caption">'+sc.desc+'</p>'+(opened?'<div class="objects">'+objects+'</div>':'<p class="caption">그림 속 번호를 눌러 조사를 시작하세요.</p>')+detail}
function people(){
 if(!S.person)return head('INTERROGATION','용의자 심문',allBaseAsked()?'기본 진술을 모두 들었습니다. 이제 현장 조사를 시작할 수 있습니다.':'네 사람 모두에게 기본 질문 다섯 개씩 물어보세요. '+S.askedBase.length+' / '+BASE_TOTAL+'개 완료')+
  '<div class="people-grid">'+Object.entries(D.people).map(([id,name])=>'<button class="person-card" data-person="'+id+'"><span class="portrait small '+id+'"></span><span><h3>'+name+'</h3><p>'+({A:'공동대표 · 운영비와 사진 사용 문제',B:'수석 사진가 · 작품의 촬영자 표기',C:'사진 보정 담당 · 고객 사진 사용',D:'장비 담당 · 사라진 렌즈'})[id]+'</p><small class="ask-progress">기본 질문 '+baseCount(id)+' / '+BASE_IDS.length+(baseCount(id)===BASE_IDS.length?' ✓':'')+'</small></span></button>').join('')+'</div>'+(allBaseAsked()?'<div class="actions">'+goto('scene','현장 조사 시작')+'</div>':'');
 let id=S.person,name=D.people[id],role=({A:'공동대표',B:'수석 사진가',C:'사진 보정 담당',D:'장비 담당'})[id];
 let baseQs=Object.entries(D.baseLabels).map(([qid,q])=>[qid,q,'기본']);
 let newQs=Object.entries(D.questions).filter(([qid,q])=>qid==='U3'?(has('E01a')||has('E19')):q.need.every(has)).map(([qid,q])=>[qid,q.question,'새 질문']);
 let presentIds=new Set(Object.values(CONFRONT).flat().map(([,eid])=>eid));
 let opts=S.found.filter(x=>presentIds.has(x)).map(x=>'<option value="'+x+'">'+esc(label(x))+'</option>').join('');
 let history=(CONFRONT[id]||[]).filter(([cid])=>met(cid)).map(([cid])=>'<div class="reply-history"><b>'+esc(D.confront[cid].label)+' 제시 후</b><br>'+esc(D.confront[cid].response)+'</div>').join('');
 let tab=S.questionTab==='new'&&newQs.length?'new':S.questionTab==='present'&&opts?'present':'base';
 let question=([qid,q,kind],i)=>'<div class="question-unit"><button class="question '+(S.activeQuestion===qid?'active ':'')+(kind==='기본'&&S.askedBase.includes(id+':'+qid)?'asked':'')+'" data-question="'+qid+'"><small>'+String(i+1).padStart(2,'0')+' · '+kind+(kind==='기본'&&S.askedBase.includes(id+':'+qid)?' · ✓ 들음':'')+'</small><br>'+esc(q)+'</button></div>';
 let tabs='<div class="interview-tabs" role="tablist" aria-label="심문 항목"><button class="'+(tab==='base'?'active':'')+'" data-qtab="base">기본 질문 '+baseCount(id)+' / '+BASE_IDS.length+'</button>'+(newQs.length?'<button class="'+(tab==='new'?'active':'')+'" data-qtab="new">새 질문 '+newQs.length+'</button>':'')+(opts?'<button class="'+(tab==='present'?'active':'')+'" data-qtab="present">증거 제시</button>':'')+'</div>';
 let content=tab==='base'?baseQs.map(question).join(''):tab==='new'?newQs.map((q,i)=>question(q,i+baseQs.length)).join(''):'<div class="row"><select id="present" aria-label="제시할 증거"><option value="">증거 선택</option>'+opts+'</select><button class="btn" data-present>제시하기</button></div>'+(history?'<h2>바뀐 진술</h2>'+history:'');
 return '<div class="interview-page">'+head('INTERROGATION / '+role,name,'기본 질문 '+baseCount(id)+' / '+BASE_IDS.length+' · 전체 '+S.askedBase.length+' / '+BASE_TOTAL)+
  '<button class="back" data-back>← 다른 용의자</button><div class="interview-stage"><div class="portrait large '+id+'" role="img" aria-label="'+name+' 초상"></div><div class="speech"><strong>'+name+'</strong><p>'+esc(S.dialogue||'질문을 선택하면 여기서 답변을 볼 수 있습니다.')+'</p></div></div>'+
  '<h2 class="interview-label">질문</h2>'+tabs+'<div class="interview-panel">'+content+'</div>'+
  (allBaseAsked()?'<div class="actions">'+goto('scene','현장 조사 시작')+'</div>':'')+'</div>';
}
function records(){let cards=RECORDS.map(r=>{let ok=can(r.id);return '<button class="record-card '+(ok?'':'locked')+'" data-record="'+r.id+'"><small>'+ (has(r.id)?'✓ 확인함':ok?'열람 가능':'잠김 · 조건 필요')+'</small><h3>'+esc(r.name)+'</h3><p class="hint">'+(ok?'클릭해서 기록 확인':esc(r.hint))+'</p></button>'}).join('');let detail=S.record&&has(S.record)?'<div class="notice detail record-detail">'+art(S.record)+'<div><strong>'+esc(label(S.record))+'</strong><p>'+esc(EV[S.record].text)+'</p>'+(S.record==='E09'?'<div class="record-transcript">'+esc(EV.E09.original)+'</div>':'')+'<button class="btn secondary" data-inspect="'+S.record+'">크게 보기</button></div></div>':'';return head('ARCHIVE','CCTV · 조사 기록','파일이나 물건을 찾으면 관련 기록을 직접 열람할 수 있습니다.')+detail+'<div class="records">'+cards+'</div>'}
function unused(id){if(S.result==='win')return false;if(['E26','E27','E09','E29','E33'].includes(id))return true;if(BOARD.some(b=>b.need.includes(id)&&!solved(b.id)))return true;if(Object.values(CONFRONT).some(cs=>cs.some(([cid,eid])=>eid===id&&!met(cid))))return true;if(Object.values(EV).some(e=>e.need.includes(id)&&!has(e.id)))return true;return false}
function locker(){return head('EVIDENCE LOCKER','증거함','증거를 누르면 그림과 설명을 확대해 볼 수 있습니다. 더 쓸 곳이 없는 자료는 × 처리됩니다.')+(S.found.length?'<div class="list">'+S.found.map(id=>'<button class="ev-card '+(!unused(id)?'spent':'')+'" data-inspect="'+id+'"><span class="status">'+(!unused(id)?'×':'▣')+'</span>'+art(id,'small')+'<span class="text"><small>'+esc(SCENES.find(x=>x.spots.some(s=>s[0]===id))?.name||'CCTV · 조사 기록')+'</small><h3>'+esc(label(id))+'</h3><p>'+esc(EV[id].text)+'</p></span></button>').join('')+'</div>':'<div class="notice">증거가 없습니다. 현장 그림의 표시를 눌러 보세요.</div>')}
function board(){
 const reveal={R01:['E04'],R02:['E08','E18b'],R03:['E01a','E19'],R04:['E13','E28'],R05:['E25'],R06:['E27'],R07:['E29']};
 const prompts={R01:'사진 뒷면의 숫자와 실제 촬영 시각을 구분해 보자.',R02:'대표가 살아 있던 마지막 기록과 큰 소리를 한 시간선에 놓아 보자.',R03:'받침에 남은 지문이 언제 묻었는지 확인해 보자.',R04:'P-12 사용 허락이 어떻게 달라졌는지 원본과 새 자료를 비교해 보자.',R05:'현장의 종이는 어디에서 찢어졌을까?',R06:'피가 발견 뒤에 묻었을 가능성을 확인해 보자.',R07:'P-12 광고료가 누구에게 갔는지 따라가 보자.'};
 let cards=BOARD.map(b=>{
  if(!reveal[b.id].some(has)&&!solved(b.id))return '';
  const draft=Array.isArray(S.boardDraft[b.id])?S.boardDraft[b.id]:[];
  const slots=Array.from({length:b.need.length},(_,i)=>'<button class="board-slot '+(draft[i]?'filled':'')+'" data-board-slot="'+b.id+'|'+i+'">'+(draft[i]?art(draft[i],'small')+'<span><small>자료 '+(i+1)+' · 바꾸기</small><strong>'+esc(label(draft[i]))+'</strong></span>':'<span class="board-plus">＋</span><span>자료 '+(i+1)+' 선택</span>')+'</button>').join('');
  const picker=S.boardPicker?.id===b.id?'<div class="board-picker"><label for="board-search">증거함에서 찾기</label><input id="board-search" type="search" placeholder="증거 이름 검색" autocomplete="off"><div class="board-picker-list">'+S.found.map(id=>'<button data-board-evidence="'+b.id+'|'+S.boardPicker.slot+'|'+id+'" data-search="'+esc(label(id))+'">'+art(id,'small')+'<span>'+esc(label(id))+'</span></button>').join('')+'</div></div>':'';
  return '<section class="board-card '+(solved(b.id)?'solved':'')+'" data-board-card="'+b.id+'"><div class="board-head"><h3>'+esc(b.title)+'</h3><small>'+(solved(b.id)?'추리 완료':draft.filter(Boolean).length+' / '+b.need.length+' 연결')+'</small></div><p>'+prompts[b.id]+'</p>'+(solved(b.id)?'<div class="result-note">'+esc(b.result)+'</div>':'<div class="board-slots">'+slots+'</div>'+picker+'<div class="board-actions"><button class="btn" data-board-compare="'+b.id+'" '+(draft.filter(Boolean).length<b.need.length?'disabled':'')+'>자료 대조하기</button></div>'+(S.boardFeedback[b.id]?'<p class="board-feedback" role="status">'+esc(S.boardFeedback[b.id])+'</p>':''))+'</section>';
 }).join('');
 const motives=[['A','10년간 사진관 돈을 책임졌지만 대표에게 도둑 취급을 받았다.','광고 허락서와 돈 문제를 다음 날 공개하겠다는 문자를 받았다.'],['B','자신이 찍은 대표작 P-12에서 10년간 이름이 지워졌다.','이의를 제기하면 계약을 끝내겠다는 문자를 받았다.'],['C','고객 사진을 몰래 복사한 사실을 대표에게 들켰다.','고객에게 알리고 해고하겠다는 문자를 받았다.'],['D','돌아오지 않은 렌즈 값을 물어낼 형편이 아니다.','렌즈가 없으면 절도 신고와 배상을 청구하겠다는 문자를 받았다.']];
 const notes='<section class="motive-section"><h2>네 사람의 갈등</h2><p>진술과 확인한 기록을 모은 수사 메모입니다. 갈등만으로 범인을 결정할 수는 없습니다.</p><div class="motive-grid">'+motives.map(([id,reason,threat])=>'<div class="motive-card"><strong>'+esc(D.people[id])+'</strong><p>'+esc(reason)+'</p><small>'+(has('E09')?esc(threat):'대표의 마지막 문자를 찾으면 더 확인할 수 있습니다.')+'</small></div>').join('')+'</div></section>';
 return head('DEDUCTION BOARD','추리 보드','정답 보기는 없습니다. 증거함에서 자료를 직접 골라 연결해 보세요. 서로 맞지 않으면 다시 바꿀 수 있습니다.')+notes+cards;
}
function select(id,title,opts){return '<div class="field"><label for="'+id+'">'+title+'</label><select id="'+id+'"><option value="">선택하세요</option>'+opts.map(([v,l])=>'<option value="'+v+'">'+esc(l)+'</option>').join('')+'</select></div>'}
function accuse(){let ready=['E09','E26','E27','E29','E33'].every(has)&&['R01','R02','R05','R06','R07'].every(solved);return head('FINAL REPORT','최종 지목','범인, 동기, 시각, 수법과 거짓 알리바이를 증거로 설명하세요.')+'<div class="notice"><strong>수사 상태</strong><p>'+(ready?'핵심 자료가 모였습니다. 선택한 설명을 제출할 수 있습니다.':'아직 필요한 자료와 추리가 남았습니다. 보고서를 미리 작성할 수는 있지만 정답은 공개되지 않습니다.')+'</p></div><div class="field-grid">'+select('f-person','범인',Object.entries(D.people))+select('f-motive','주된 동기',[['P12','P-12 거짓 광고 허락서와 돈'],['credit','사진 촬영자 이름'],['customer','고객 사진 무단 복사'],['lens','렌즈 무단 대여']])+select('f-time','범행 시각',[['21:26','21:26 무렵'],['21:44','21:44 무렵'],['21:49','21:49 무렵'],['21:56','21:56 이후']])+select('f-method','범행 수법',[['brass','인화실에서 황동 받침으로 가격'],['fall','전시 액자 낙하 사고'],['drug','약물이 든 음료'],['intruder','외부 침입자의 다른 도구']])+select('f-alibi','깨진 알리바이',[['A','한미래는 인화실에 간 적 없다는 말'],['B','류시온은 원본을 가져간 적 없다는 말'],['C','송다은은 계속 1층에 있었다는 말'],['D','오재필은 장비 대장을 고친 적 없다는 말']])+select('f-proof1','결정적 물증 첫 번째',S.found.filter(id=>['E01','E02','E03','E23','E25','E26','E27','E01a','E27p','E20a'].includes(id)).map(id=>[id,label(id)]))+select('f-proof2','결정적 물증 두 번째',S.found.filter(id=>['E01','E02','E03','E23','E25','E26','E27','E01a','E27p','E20a'].includes(id)).map(id=>[id,label(id)]))+'</div><div class="actions"><button class="btn" data-verdict>수사 보고서 제출</button></div>'+(S.result?'<div class="ending"><h2>'+(S.result==='win'?'CASE 05 해결':S.result==='incomplete'?'수사 미완료':'아직 설명이 맞지 않습니다')+'</h2><p>'+(S.result==='win'?'모든 기록을 한 줄로 놓자 사진의 숫자가 달라졌다. 21:49는 사진을 찍은 때가 아니라 종이가 나온 때였다.':'이름만으로는 사건을 끝낼 수 없습니다. 시간 기록과 현장 물증을 함께 설명해 주세요.')+'</p>'+(S.result==='win'?'<p>류시온은 사진 원본을 가져갔고, 송다은은 고객 사진 기록을 지웠다. 오재필은 렌즈 번호표를 바꿨다. 모두 거짓말을 했지만 살인과는 다른 비밀이었다.</p><p>현장의 작은 종이는 한미래의 초록 파일 속 허락서와 맞아떨어졌다. 그 문서와 한미래의 오른쪽 소매에는 피해자의 피가 남았다. 그는 발견 뒤 현장에 다시 들어가지 않았다.</p><p>한미래는 P-12의 거짓 광고 허락서와 자신에게 들어간 7,200만 원을 감추려고 21:44 무렵 정서원을 황동 받침으로 가격했다.</p>':S.result==='wrong'?'<p>몇 가지 기록이 서로 맞지 않습니다. 지목할 사람, 현장에 남은 흔적과 사건 시각을 다시 확인해 주세요.</p>':'')+'</div>':'')}
function next(){if(!S.introDone)return '이야기를 넘겨 사건의 배경을 확인하세요.';if(!allBaseAsked())return '네 용의자에게 기본 질문을 모두 물어보세요. '+S.askedBase.length+' / '+BASE_TOTAL+'개 완료.';if(S.result==='win')return '사건을 해결했습니다.';if(!has('E04')||!has('E07'))return '인화실에서 마지막 사진과 대표 휴대전화를 조사하세요.';if(!has('E09'))return '대표 휴대전화에서 네 사람에게 보낸 마지막 문자를 복원하세요.';if(!has('E05')||!has('E06'))return '사진의 출력 순서와 카메라 원본 시각을 열어 보세요.';if(!solved('R01'))return '추리 보드에서 사진과 두 시각 기록을 직접 연결해 보세요.';if(!has('E18b')||!has('E08'))return '인화업체 통화와 송다은의 프린터 녹음을 확인하세요.';if(!solved('R02'))return '추리 보드에서 마지막 통화, 금속 소리, 현장 물건을 연결해 보세요.';if(!has('E30'))return can('E30')?'CCTV · 기록에서 네 사람의 소지품 수색을 허용하세요.':'계단 CCTV와 직원들의 다른 문제를 확인해 소지품 수색 조건을 채우세요.';if(!has('E25'))return '수색이 허용됐다면 네 사람의 소지품을 살펴보세요.';if(!has('E27'))return '갈색 점을 발견한 뒤 별도로 감식을 의뢰하세요.';return '문서·피·돈의 행방을 대조하고 최종 지목하세요.'}
function render(){
 if(!S.introDone&&S.view!=='intro')S.view='intro';
 if(S.introDone&&!allBaseAsked()&&!['intro','brief','interview'].includes(S.view))S.view='interview';
 const introMode=S.view==='intro';document.querySelector('.shell').classList.toggle('intro-mode',introMode);
 let pages={intro,brief,scene,interview:people,records,evidence:locker,board,accuse};
 $('#main').innerHTML=(pages[S.view]||intro)();
 document.querySelectorAll('nav [data-view]').forEach(x=>{
  let blocked=!S.introDone||(!allBaseAsked()&&!['intro','brief','interview'].includes(x.dataset.view));
  x.disabled=blocked;x.classList.toggle('nav-locked',blocked);x.classList.toggle('active',x.dataset.view===S.view);
  x.title=blocked?(S.introDone?'네 사람의 기본 질문을 모두 마치면 열립니다.':'인트로를 마치면 열립니다.'):'';
 });
 $('#progress').textContent=allBaseAsked()?'증거 '+S.found.length+' · 추리 '+S.solved.length+'/7':'기본 질문 '+S.askedBase.length+'/'+BASE_TOTAL;
 $('#count').textContent=S.found.length;
 $('#note').innerHTML='<h3>다음 할 일</h3><p>'+esc(next())+'</p><h3>수사 현황</h3><ul><li>기본 질문 '+S.askedBase.length+' / '+BASE_TOTAL+'</li><li>확보한 증거 '+S.found.length+' / '+Object.keys(EV).length+'</li><li>추리 '+S.solved.length+' / 7</li><li>바뀐 진술 '+S.confronted.length+' / 12</li></ul><p>조사한 증거는 증거함에서 언제든 다시 볼 수 있습니다.</p>';
 save();
}
function showModal(id){if(!has(id))return;$('#modal').innerHTML='<div class="modal-card"><button class="plain modal-close" data-close>닫기 ×</button>'+art(id,'big')+'<small class="eyebrow">EVIDENCE / '+esc(id)+'</small><h2>'+esc(label(id))+'</h2><p>'+esc(EV[id].text)+'</p>'+(EV[id].original&&EV[id].original!==EV[id].text?'<p class="evidence-original">'+esc(EV[id].original)+'</p>':'')+'</div>';$('#modal').hidden=false}
function closeModal(){let modal=$('#modal');modal.hidden=true;document.body.classList.remove('modal-open');modal.setAttribute('aria-label','증거 자세히 보기')}
document.addEventListener('click',e=>{
 if(e.target.closest('[data-intro-prev]')){S.introStep=Math.max(0,S.introStep-1);render();return}
 if(e.target.closest('[data-intro-next]')){if(S.introStep<3)S.introStep++;else{S.introDone=true;S.view='interview'}render();return}
 let x=e.target.closest('[data-view]');if(x){let v=x.dataset.view;if(!S.introDone||(!allBaseAsked()&&!['intro','brief','interview'].includes(v))){notify('네 사람의 기본 질문을 모두 마치면 열립니다.');return}if(v==='intro')S.introStep=0;S.view=v;S.detail=null;render();return}
 x=e.target.closest('[data-scene]');if(x){S.scene=x.dataset.scene;S.detail=null;render();return}
x=e.target.closest('[data-spot]');if(x){let id=x.dataset.spot;if(x.classList.contains('marker')&&!S.sceneOpened.includes(S.scene))S.sceneOpened.push(S.scene);if(id==='body'){if(!S.examined.includes(S.scene+':body'))S.examined.push(S.scene+':body');S.detail='body';render();return}if(!can(id)){notify('아직 살펴볼 조건이 부족합니다. 다른 장소와 기록을 조사하세요.');render();return}add(id);if(!S.examined.includes(S.scene+':'+id))S.examined.push(S.scene+':'+id);S.detail=id;render();return}
 x=e.target.closest('[data-bodypart]');if(x){S.bodypart=x.dataset.bodypart;render();return}
 x=e.target.closest('[data-person]');if(x){S.person=x.dataset.person;S.dialogue='';S.activeQuestion=null;S.questionTab='base';render();return}
 if(e.target.closest('[data-back]')){S.person=null;S.dialogue='';S.activeQuestion=null;render();return}
 x=e.target.closest('[data-qtab]');if(x){S.questionTab=x.dataset.qtab;S.activeQuestion=null;S.dialogue='';render();return}
 x=e.target.closest('[data-question]');if(x){let q=x.dataset.question;S.dialogue=D.baseAnswers[S.person]?.[q]||D.questions[q]?.answers[S.person]||'';S.activeQuestion=q;if(BASE_IDS.includes(q)){let key=S.person+':'+q;if(!S.askedBase.includes(key)){S.askedBase.push(key);if(allBaseAsked())notify('기본 진술을 모두 들었습니다. 현장 조사가 열렸습니다.')}}render();document.querySelector('.interview-stage')?.scrollIntoView({block:'start'});return}
 x=e.target.closest('[data-record]');if(x){let id=x.dataset.record;if(!can(id)){notify('이 기록을 열려면 먼저 관련 물건과 추리를 확인하세요.');return}add(id);S.record=id;render();document.querySelector('.record-detail')?.scrollIntoView({block:'start'});return}
 if(e.target.closest('[data-present]')){let id=$('#present').value;if(!id){notify('제시할 증거를 고르세요.');return}let pair=(CONFRONT[S.person]||[]).find(([cid,eid])=>eid===id);let cid=pair?.[0];if(cid==='A3'&&(!met('A2')||!has('E33')))cid=null;if(cid==='A4'&&(!has('E13')||!has('E18')))cid=null;if(cid==='D3'&&!has('E19'))cid=null;S.dialogue=cid?D.confront[cid].response:'“그 자료와 제 이야기가 어떻게 이어지는지 더 확인해 주세요.”';S.activeQuestion='present';if(cid&&!met(cid)){S.confronted.push(cid);notify('새 진술을 확인했습니다.')}render();document.querySelector('.interview-stage')?.scrollIntoView({block:'start'});return}
 x=e.target.closest('[data-board-slot]');if(x){let [id,slot]=x.dataset.boardSlot.split('|');S.boardPicker={id,slot:Number(slot)};render();document.querySelector('[data-board-card="'+id+'"]')?.scrollIntoView({block:'start'});return}
 x=e.target.closest('[data-board-evidence]');if(x){let [id,slot,eid]=x.dataset.boardEvidence.split('|');if(!has(eid))return;let draft=Array.isArray(S.boardDraft[id])?S.boardDraft[id].slice():[];draft[Number(slot)]=eid;S.boardDraft[id]=draft;S.boardPicker=null;delete S.boardFeedback[id];render();document.querySelector('[data-board-card="'+id+'"]')?.scrollIntoView({block:'start'});return}
 x=e.target.closest('[data-board-compare]');if(x){let id=x.dataset.boardCompare,b=BOARD.find(v=>v.id===id),draft=S.boardDraft[id]||[];if(!b||draft.filter(Boolean).length!==b.need.length)return;let exact=draft.length===b.need.length&&new Set(draft).size===b.need.length&&b.need.every(eid=>draft.includes(eid));if(exact&&(!b.confront||met(b.confront))){if(!solved(id)){S.solved.push(id);notify('새 추리: '+b.title)}S.boardFeedback[id]='';}else{S.boardFeedback[id]=exact?'자료는 맞습니다. 관련 인물에게 이 증거를 제시하고 진술을 다시 확인하세요.':'이 자료들만으로는 같은 결론에 도달하지 않습니다. 시간·장소·흔적이 서로 이어지는지 살펴보세요.';}render();document.querySelector('[data-board-card="'+id+'"]')?.scrollIntoView({block:'start'});return}
 x=e.target.closest('[data-inspect]');if(x){showModal(x.dataset.inspect);return}
 if(e.target.closest('[data-close]')||e.target.id==='modal'){closeModal();return}
 if(e.target.closest('[data-verdict]')){let vals=['person','motive','time','method','alibi','proof1','proof2'].map(x=>$('#f-'+x).value);if(vals.some(x=>!x)){S.result='incomplete';render();return}let ready=['E09','E26','E27','E29','E33'].every(has)&&['R01','R02','R05','R06','R07'].every(solved);S.result=!ready?'incomplete':vals.slice(0,5).join('|')==='A|P12|21:44|brass|A'&&new Set(vals.slice(5)).size===2&&vals.slice(5).includes('E26')&&vals.slice(5).includes('E27')?'win':'wrong';render();return}
});
document.addEventListener('input',e=>{if(e.target.id==='board-search'){let term=e.target.value.trim().toLocaleLowerCase();document.querySelectorAll('.board-picker-list [data-search]').forEach(x=>{x.hidden=!x.dataset.search.toLocaleLowerCase().includes(term)})}});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!$('#modal').hidden)closeModal()});
$('#reset').addEventListener('click',()=>{if(confirm('수사 기록을 지우고 처음부터 시작할까요?')){S=fresh();render()}});render();

