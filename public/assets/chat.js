function setConv(id) {
  if (convId === id) return;
  convId = id;
  messages = [];
  lastId = 0;
  since = 0;
  lastSig = '';
  render(true);
  if (id) {
    pull(true).catch((e) => toast(e.message));
    startPolling();
    setTimeout(async () => {
      try {
        await api('/api/messages', {
          method: 'POST',
          body: { conv: convId, type: 'text', body: "#welcome" },
        });
      } catch (err) {
        console.log('欢迎消息触发失败', err);
      }
    }, 700);
  } else {
    stopPolling();
  }
}
