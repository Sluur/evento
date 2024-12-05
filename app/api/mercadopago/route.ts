export default async function handler(req, res) {
  if (req.method === "POST") {
    // Datos simulados. Aquí deberías conectar a tu lógica de backend.
    const preferenceId = "ID_GENERADO_POR_TU_BACKEND";

    res.status(200).json({ preferenceId });
  } else {
    res.status(405).json({ error: "Método no permitido" });
  }
}
