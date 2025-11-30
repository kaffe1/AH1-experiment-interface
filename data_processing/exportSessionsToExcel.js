import admin from "firebase-admin";
import XLSX from "xlsx";
import fs from "fs";

const serviceAccount = JSON.parse(
  fs.readFileSync("./serviceAccountKey.json", "utf8")
);

// initial firebase admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

async function exportSessions() {
  const snapshot = await db.collection("sessions").get();

  const rows = [];

  snapshot.forEach((doc) => {
    const data = doc.data();
    const row = {
      id: doc.id,
      completedAt: data.completedAt,
      ...data.ratings, // 展开所有 video-x
    };
    rows.push(row);
  });

  // convert to worksheet
  const worksheet = XLSX.utils.json_to_sheet(rows);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sessions");

  // export Excel
  XLSX.writeFile(workbook, "sessions.xlsx");

  console.log("✅ 导出完成：sessions.xlsx");
}

exportSessions();
