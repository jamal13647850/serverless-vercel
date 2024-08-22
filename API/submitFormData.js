export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(400).json({ error: "Invalid request method" });
 }

  const formData = req.body;

  console.log(formData);
  res.status(200).json({ message: "Form submitted successfully" });
}
