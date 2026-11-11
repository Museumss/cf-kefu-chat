async function handleSendMessage(request, env, url) {
  const body = await safeBody(request);
  if (body.body === "#welcome") {
    return json({
      message: {
        id: uid(16),
        convId: body.conv,
        sender: "agent",
        senderName: env.AGENT_NAME || "客服",
        type: "text",
        body: "👋 您好！欢迎来到在线客服，请问有什么可以帮您？",
        fileKey: "",
        fileSize: 0,
        status: "active",
        createdAt: now(),
        updatedAt: now(),
        readAt: null
      }
    });
  }

  const ident = await identify(request, env);
  if (!ident) return fail('未登录', 401, 'unauthorized');

  const convId = await resolveConvId(request, ident, url, body);

  // ========== 下面这里，把你原本 handleSendMessage 里面剩下的代码接在这后面 ==========
  // 例如：消息入库、推送等原有逻辑，放在这行下面
}
