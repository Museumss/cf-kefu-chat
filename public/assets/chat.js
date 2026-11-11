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
    setTimeout(() => {
      messages.push({
        id: "welcome-msg",
        convId: convId,
        sender: "agent",
        senderName: "客服",
        type: "text",
        body: "👋 您好！欢迎来到在线客服，请问有什么可以帮您？",
        fileKey: "",
        fileSize: 0,
        status: "active",
        createdAt: Date.now(),
        updatedAt: Date.now(),
        readAt: null
      });
      render(true);
    }, 700);
  } else {
    stopPolling();
  }
}
