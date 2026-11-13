(() => {
  const holder=document.getElementById('musicHolder'),button=document.getElementById('musicToggle');
  let playing=false;
  function start(){if(playing)return;playing=true;button.textContent='음악 끄기';holder.innerHTML='<iframe title="추리 게임 배경음악 · YouTube" tabindex="-1" width="224" height="126" src="https://www.youtube.com/embed/Kbkk07ebJu4?autoplay=1&playsinline=1&loop=1&playlist=Kbkk07ebJu4" allow="autoplay; encrypted-media; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin"></iframe>'}
  function stop(){playing=false;holder.replaceChildren();button.textContent='♪ 음악 켜기'}
  button.addEventListener('click',()=>playing?stop():start());
  document.addEventListener('click',e=>{if(!playing&&e.target.closest('[data-a="next"]'))start()},true);
})();
