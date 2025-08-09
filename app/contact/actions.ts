"use server"

export async function submitContact(formData: FormData) {
  // Simulate processing; plug into your CRM/email in production.
  const payload = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    company: String(formData.get("company") ?? ""),
    message: String(formData.get("message") ?? ""),
  }

  // Very naive validation (add stricter checks as needed)
  if (!payload.name || !payload.email || !payload.message) {
    return { ok: false, error: "Please fill in name, email, and message." }
  }

  await new Promise((r) => setTimeout(r, 600))
  return { ok: true }
}
