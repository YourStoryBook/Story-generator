Deno.serve(async (req) => {
  const body = await req.json();

  return new Response(
    JSON.stringify({
      success: true,
      message: "Story Generator Backend funktioniert 🚀",
      received: body
    }),
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    }
  );
});
