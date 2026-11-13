window.CASE06V2 = {
  people:[
    {id:'jia',name:'한지아',sprite:1,role:'유진의 오랜 친구',relation:'고교 시절부터 유진과 같은 모임에서 지낸 친구.',initial:'유진과는 오래 알고 지냈어요. 특별히 다툰 일은 없어요.',base:[
      ['마지막으로 유진을 본 때는?','저녁에 다 같이 사진을 봤을 때요. 이후에는 위층에 있었습니다.'],['밤 10시부터 11시 사이에는?','방에 있었어요. 정확한 시간은 보지 않았습니다.'],['오늘 분위기는 어땠나요?','옛날 사진 얘기가 나왔지만 금방 끝났어요. 수빈이와 유진이가 면접 얘기로 잠깐 언성을 높인 정도였죠.']]},
    {id:'tae',name:'강태준',sprite:2,role:'내일 결혼하는 동창',relation:'유진의 고교 동창. 내일 결혼식을 앞두고 있다.',initial:'유진과 사이가 나쁘진 않았습니다. 저는 한동안 씻고 있었어요.',base:[
      ['유진과 마지막 대화는?','사진 얘기를 조금 했습니다. 따로 할 말은 없었어요.'],['밤 10시부터 11시 사이에는?','위층에서 샤워했어요. 밖에 나간 적은 없습니다.'],['오늘 모임이 불편했나요?','오래된 사진이 반갑지만은 않았죠. 그 이상은 아닙니다.']]},
    {id:'min',name:'오민서',sprite:3,role:'사진가',relation:'유진의 고교 동창. 모임에서 사진을 자주 찍었다.',initial:'유진이 부탁한 사진을 정리했어요. 다들 평범하게 지냈습니다.',base:[
      ['마지막으로 유진을 본 때는?','모임에서 사진을 봤을 때요. 카메라를 챙겨 방으로 올라갔습니다.'],['밤 10시부터 11시 사이에는?','제 방에서 사진 파일을 정리했어요.'],['오래된 사진은 누가 찍었나요?','제가 찍은 사진이에요. 오래돼서 원본이 어디 있는지는 모르겠네요.']]},
    {id:'siu',name:'박시우',sprite:4,role:'현재 학교 교사',relation:'유진의 고교 동창. 졸업 후에도 모임을 이어 왔다.',initial:'좋은 친구였어요. 사건 무렵에는 거실에 있었습니다.',base:[
      ['유진과 마지막 대화는?','저녁 자리였어요. 그 뒤엔 단둘이 본 적 없습니다.'],['밤 10시부터 11시 사이에는?','거실에서 책을 봤어요. 비가 와서 밖엔 나가지 않았습니다.'],['사진 얘기에 왜 화를 냈나요?','옛날 이야기를 꺼내는 방식이 싫었을 뿐이에요.']]},
    {id:'sub',name:'정수빈',sprite:5,role:'뒤늦게 모임에 합류한 친구',relation:'졸업 뒤 민서를 통해 친구들을 알게 됐고, 유진과도 오래 교류했다.',initial:'유진과 면접 얘기로 다툰 건 맞아요. 그렇다고 죽일 이유는 없어요.',base:[
      ['마지막으로 유진을 본 때는?','저녁 식탁에서요. 유진이가 먼저 자리에서 일어났고, 저는 방으로 올라갔어요.'],['밤 10시부터 11시 사이에는?','제 방에 있었습니다. 시계를 계속 본 건 아니에요.'],['유진과 언성을 높였나요?','몇 년을 준비한 면접을 유진이가 술안주처럼 말했어요. 화가 났죠. 그래도 다툰 건 거기까지예요.']]}
  ],
  rooms:[
    {id:'living',name:'거실',sprite:'L01',stage:[2,4,7],spots:[['photo',31,34],['coat',75,37]]},
    {id:'sun',name:'선룸',sprite:'L02',stage:[2,4,7],spots:[['body',45,66],['candle',64,74],['case',36,70],['cap',26,36],['cord',78,45],['rec',25,75],['pillow',51,60]]},
    {id:'terrace',name:'테라스',sprite:'L03',stage:[2,4,7],spots:[['prints',39,76],['thread',67,41]]},
    {id:'jiaRoom',name:'지아의 방',sprite:'L06',stage:[4,7],spots:[['jiaDrawer',26,54],['knife',35,67]]},
    {id:'taeRoom',name:'태준의 방',sprite:'L07',stage:[4,7],spots:[['taeBox',56,57],['tool',33,72]]},
    {id:'minRoom',name:'민서의 방',sprite:'L08',stage:[4,7],spots:[['minCamera',45,50],['tripod',70,56],['deleted',29,68]]},
    {id:'siuRoom',name:'시우의 방',sprite:'L09',stage:[4,7],spots:[['siuPhone',47,45]]},
    {id:'subRoom',name:'수빈의 방',sprite:'L10',stage:[4,7],spots:[['subNote',28,49],['subMsg',48,38],['suitcase',72,69],['wallet',72,69],['subBag',51,77]]},
    {id:'yujinRoom',name:'유진의 방',sprite:'L11',stage:[4,7],spots:[['article',50,57]]},
    {id:'laundry',name:'세탁실',sprite:'L04',stage:[7],spots:[['coatBlue',55,59]]},
    {id:'kitchen',name:'주방',sprite:'L05',stage:[7],spots:[['keyCup',29,41]]}
  ],
  clues:{
    photo:['잘린 축제 사진','사진에는 다섯 사람이 보인다. 오른쪽 끝이 반듯하지 않게 잘려 있다.','E02',2],
    body:['시신의 머리 상처','유진의 뒤통수에 상처가 있다. 이것만으로 사인은 단정할 수 없다.','body-exam.webp',2],
    candle:['피 묻은 무쇠 촛대','시신 가까이에 무거운 촛대가 쓰러져 있다.','E04',2],
    case:['빈 휴대전화 케이스','케이스만 남고 유진의 전화는 보이지 않는다.','E05',2],
    cap:['카메라 렌즈 뚜껑','바닥에서 카메라 부품이 발견됐다.','E09',2],
    cord:['꺾인 충전선','선을 힘껏 잡아당긴 흔적이 있다.','E08',2],
    prints:['겹친 젖은 발자국','비를 맞은 신발 자국 여러 개가 겹쳤다. 주방 뒷문과 선룸 바깥문이 이어진다.','E10',2],
    jiaDrawer:['지아의 잠긴 서랍','침대 옆 서랍에 작은 열쇠 구멍이 있다.',null,4],
    jiaDebt:['독촉 문자와 상환 내역','유진은 돈을 갚은 뒤에도 지아의 가족에게 알리겠다고 했다.','E19',4],
    taeBox:['태준의 서류 상자','뚜껑에 걸쇠가 있다. 상자 아래쪽을 더듬어 볼 수 있다.',null,4],
    taeDoc:['옛 목격 진술서','태준이 하린의 절도를 직접 봤다고 서명한 기록과 유진의 폭로 메시지.','E22',4],
    minCamera:['민서의 카메라 보관함','카메라와 사진 편집용 메모리 카드가 있다. 카드를 살펴볼 수 있다.',null,4],
    minEdit:['사진 편집 기록','2014년 사진의 오른쪽을 잘라낸 편집 내역이 남아 있다.','photo-edit-record.webp',4],
    siuPhone:['시우의 휴대전화','알림 화면에 유진이 보낸 메시지 미리 보기가 있다.','siu-phone.webp',4],
    subMsg:['21:42의 짧은 메시지','수빈이 유진에게 면접 얘기가 기분 나빴다고 보냈다.','sub-message.webp',4],
    subNote:['수빈의 오래된 조사 노트','하린 사건 날짜와 친구들의 이름을 오래 추적했다. 관계는 적혀 있지 않다.','research-notes.webp',4],
    article:['당시 사건 기사','축제 기부금 절도 누명을 쓴 하린이 몇 주 뒤 세상을 떠났다고 기록한다.','old-article.webp',4],
    followup:['하린 사망 후속 기사','축제 기부금 절도 의혹을 받았던 여고생 하린이 몇 주 뒤 숨졌다는 후속 보도. 앞서 읽은 절도 기사와 같은 사건이다.','followup-news.svg',7],
    oldPost:['당시 익명 게시글','축제 직후 학교 게시판에 올라온 익명 글. 하린을 범인이라고 단정하지만 작성자 이름은 보이지 않는다.','anonymous-post.svg',7],
    suitcase:['잠긴 캐리어','작은 자물쇠가 걸려 있다. 열쇠는 보이지 않는다.',null,4],
    key:['작은 캐리어 열쇠','거실 옷걸이의 수빈 외투 안주머니에서 나왔다.','suitcase-key.webp',4],
    wallet:['낡은 지갑','캐리어 안쪽 주머니에 들어 있었다. 카드칸 뒤에 종이 모서리가 보인다.','wallet-open.webp',4],
    walletPhoto:['낡은 어린 시절 사진','어린 수빈 옆에 더 어린 여자아이가 있다. 뒷면에도 이름은 없다.','child-photo.webp',4],
    knife:['천에 싼 과도','칼날에 보이는 혈흔은 없다.','E21',7],
    tool:['접이식 공구','태준의 가방에 접힌 공구가 있다.','E24',7],
    tripod:['얼룩진 삼각대','다리에 붉은 얼룩이 있다. 검사 전에는 정체를 모른다.','E26',7],
    deleted:['삭제된 사진 파일','민서의 카드에 삭제된 파일 하나가 남아 있다. 복원할 수 있다.','E25',7],
    restored:['22:44 테라스 사진','테라스와 주방 뒷문이 찍혔다. 가장자리의 인물은 흐리다.','E25',7],
    zoom:['사진 가장자리 확대','주방 뒷문 유리에 시우가 보인다. 파란 옷의 오른쪽 소매는 멀쩡하다.','E25',7],
    coatBlue:['찢어진 파란 바람막이','세탁실 바구니 아래 젖은 옷이 숨겨져 있다. 오른쪽 소매가 찢겼다.','E31',7],
    coatBlood:['바람막이의 혈흔 결과','찢어진 소매 안쪽의 혈흔은 유진의 것이다. 피가 묻은 시각은 이 결과만으로 알 수 없다.','E33',7],
    thread:['문손잡이의 붉은 실','바깥 미닫이문 손잡이에 실 한 가닥이 걸려 있다.','E41',7],
    rec:['배터리 없는 녹음기','소파 틈의 녹음기. 현장 보존 기록에는 방전된 전지를 분리해 두었다고 적혀 있다. 지금은 배터리함이 비어 있다.','recorder-empty.webp',7],
    battery:['여분 배터리','주방 서랍의 작은 상자에서 녹음기와 같은 규격 배터리를 찾았다.','batteries.webp',7],
    impact:['22:49 녹음','큰 충격음이 있다. 파일은 그 뒤로도 이어진다.','E40',7],
    phone:['유진의 전화와 원본 자료','수빈의 가방에서 전화와 원본이 나왔다. 사진에는 유진이 기부금 봉투를 가방에 넣는 장면이 찍혔다. 함께 보관된 대화에는 지아의 소문, 태준의 거짓 증언, 민서의 사진 편집, 시우의 익명 글이 남아 있다.','E38',7],
    exam:['첫 검시 의견','촛대와 상처는 맞지만 직접 사인을 단정하기 어렵다.','forensic-head.webp',7],
    after:['녹음 뒷부분','충격 이후에도 약한 숨소리와 몸이 움직이는 듯한 소리가 이어진다.','recording-tail.webp',7],
    reexam:['시신 재검토','머리 상처만으로 사망을 충분히 설명하기 어렵다. 입·코 주변에는 압박을 의심할 흔적이 있다.','forensic-reexam.webp',7],
    pillow:['뒤집은 소파 베개','솔기가 뜯어졌고 눌린 면에 유진의 흔적이 남았다.','pillow-back.webp',7],
    scratch:['손과 손톱 대조','수빈의 새 손 상처와 피해자 손톱의 접촉 흔적을 대조했다. 발생 시점에 대한 수빈의 말과 맞지 않는다.','scratch-compare.webp',7]
  }
};

// Each record below describes only what the detective can read when it is found.
// The game controls when a search point becomes available.
(() => {
  const d=window.CASE06V2;
  d.clues.photo[1]='식탁에 놓였던 오래된 축제 사진. 오른쪽 끝이 잘려 있다.';
  d.clues.body[0]='유진의 시신';
  d.clues.body[1]='뒤통수에 상처와 피가 보인다. 정확한 사망 원인은 아직 확인되지 않았다.';
  d.clues.taeDoc[0]='오래된 목격 진술서';
  d.clues.taeDoc[1]='축제 기부금 사건 당시 태준이 작성한 진술. 누구의 말을 믿었는지 확인할 수 있다.';
  d.clues.minEdit[1]='오래된 축제 사진의 오른쪽 부분을 잘라낸 작업 기록.';
  d.clues.subMsg[0]='면접 뒤의 문자';
  d.clues.subMsg[1]='수빈은 유진에게 면접 이야기를 다시 꺼내지 말라고 보냈다.';
  d.clues.subNote[0]='오래된 수첩';
  d.clues.subNote[1]='수빈이 여러 해에 걸쳐 적은 날짜와 이름. 마지막 장에 “하린은 내 사촌동생이었다. 누명을 벗길 때까지 그들 곁에 남는다”라고 적혀 있다.';
  d.clues.article[0]='접힌 옛 기사';
  d.clues.article[1]='학교 축제 기부금이 사라졌다는 짧은 기사. 누가 왜 보관했는지는 알 수 없다.';
  d.clues.article[2]='festival-article.svg';
  d.clues.key[1]='수빈의 외투 안쪽에서 나온 작은 열쇠.';
  d.clues.rec[1]='소파 틈의 녹음기. 전지가 분리돼 배터리함이 비어 있다.';
  d.clues.battery[1]='주방 비품함에 남은 두 개의 AA 전지.';
  d.clues.phone[0]='수빈의 가방 속 유진의 휴대전화';
  d.clues.phone[1]='수빈의 가방 안쪽에서 유진의 휴대전화를 발견했다. 수빈이 왜 가져갔는지는 물어봐야 한다.';
  d.clues.phone[2]='phone-bag.webp';
  d.clues.jiaDebt[1]='지아가 빌린 돈을 모두 갚았는데도 유진은 가족에게 알리겠다고 했다.';
  d.clues.jiaDebt[2]='jia-debt.svg';
  d.clues.taeDoc[2]='tae-statement.svg';
  d.clues.jiaDrawer[2]='object-drawer.webp';
  d.clues.taeBox[2]='object-box.webp';
  d.clues.minCamera[2]='object-camera.webp';
  d.clues.suitcase[2]='object-suitcase.webp';
  d.clues.scratch[1]='여러 사람의 상처를 다시 살핀 결과, 수빈의 손에 남은 흔적은 선룸에서 발견된 접촉 흔적과 비교할 필요가 있다.';
  Object.assign(d.clues,{
    marks:['다섯 사람의 몸 상태','지아의 손바닥, 태준의 손등, 민서의 무릎, 시우의 팔, 수빈의 손에 작은 흔적이 있다. 생긴 이유와 시각은 알 수 없다.','marks-record.svg',2],
    bodyJia:['지아의 손바닥 상처와 열쇠','손바닥에 얕은 상처가 있다. 불룩한 가디건 주머니를 살피자 작은 서랍 열쇠가 나왔다. 상처가 생긴 경위는 아직 모른다.','body-jia.webp',4],
    bodyTae:['태준의 손등 상처','태준의 손등에 작은 찰과상이 있다. 생긴 경위는 확인되지 않았다.','body-tae.webp',4],
    bodyMin:['민서의 무릎 멍','민서의 무릎에 새 멍이 보인다. 어디서 부딪혔는지 물어봐야 한다.','body-min.webp',4],
    bodySiu:['시우의 팔 긁힘','시우의 팔에 긁힌 흔적이 있다. 언제 생긴 것인지는 모른다.','body-siu.webp',4],
    bodySub:['수빈의 손 상처','수빈의 손에 가느다란 새 상처가 있다. 생긴 경위는 확인되지 않았다.','body-sub.webp',4],
    hire:['수빈의 채용 기록','수빈이 오랫동안 준비한 자리의 최종 후보였지만 탈락했다. 담당자와 유진이 연락한 흔적이 있다.','hiring-record.svg',4],
    taeThreat:['태준에게 온 문자','유진: “너 그 사건, 내일 결혼하는 네 약혼자도 알아? ㅋㅋ” 결혼식 전날 태준에게 보낸 문자다.','tae-threat.svg',4],
    minThreat:['민서에게 온 문자','유진이 오래된 사진 원본을 언급했다. 민서는 답을 보내지 않았다.','min-threat.svg',4],
    oldBack:['축제 사진 뒷면','사진 뒤에 학교 축제 날짜와 준비실이라는 글씨가 남아 있다.','school-photo-back.svg',7],
    schoolRecord:['학교 행사 기록','축제 기부금이 사라졌고 하린이라는 학생이 의심받았다는 당시 학교 기록.','school-record.svg',7],
    supplyList:['주방 비품표','비품표에는 AA 전지 여분을 주방 서랍의 작은 상자에 둔다고 적혀 있다.','supply-list.svg',13]
  });
  d.clues.original=['휴대전화 속 원본 사진과 대화','유진의 휴대전화 파일에 잘리기 전 축제 사진과 오래된 대화가 있다. 사진에는 유진이 기부금 봉투를 가방에 넣는 장면이 찍혔다.','festival-envelope.webp',13];
  d.rooms.find(r=>r.id==='subRoom').spots.push(['hire',60,48]);
  d.rooms.find(r=>r.id==='taeRoom').spots.push(['taeThreat',69,40]);
  d.rooms.find(r=>r.id==='minRoom').spots.push(['minThreat',58,35]);
  d.rooms.find(r=>r.id==='living').spots.push(['oldBack',32,36]);
  d.rooms.find(r=>r.id==='yujinRoom').spots.push(['schoolRecord',66,36]);
  d.rooms.find(r=>r.id==='yujinRoom').spots.push(['followup',35,68]);
  d.rooms.find(r=>r.id==='siuRoom').spots.push(['oldPost',63,61]);
  d.rooms.find(r=>r.id==='kitchen').spots.push(['supplyList',65,35]);
  d.rooms.find(r=>r.id==='yujinRoom').spots=d.rooms.find(r=>r.id==='yujinRoom').spots.filter(x=>x[0]!=='article');
  d.rooms.find(r=>r.id==='sun').spots.push(['article',20,31]);
})();
