export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(200).send("OK");
  }

  try {
    const body = req.body;

    if (!body.events || body.events.length === 0) {
      return res.status(200).send("OK");
    }

    const event = body.events[0];
    const source = event.source || {};

    console.log(JSON.stringify({
      type: source.type || "",
      userId: source.userId || "",
      groupId: source.groupId || "",
      roomId: source.roomId || ""
    }));

    return res.status(200).send("OK");
  } catch (error) {
    console.error(error);
    return res.status(200).send("OK");
  }
}
