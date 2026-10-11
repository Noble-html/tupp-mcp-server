import { z } from "zod";
import { type InferSchema } from "xmcp";

export const schema = {
  title: z.string().describe("ชื่องานการบ้าน"),
  subject: z.string().describe("ชื่อวิชา"),
  dueAt: z.string().describe("กำหนดส่ง (YYYY-MM-DD)"),
  priority: z.enum(["NORMAL", "HIGH", "URGENT"]).default("NORMAL").describe("ระดับความสำคัญ"),
};

export const metadata = {
  name: "add_homework_task",
  description: "บันทึกการบ้านใหม่เข้าสู่ระบบ TUPP Homework AI",
};

export default async function addTask({ title, subject, dueAt, priority }: InferSchema<typeof schema>) {
  return {
    content: [
      {
        type: "text",
        text: `บันทึกการบ้านสำเร็จ! งาน: "${title}" วิชา ${subject} กำหนดส่ง ${dueAt} (ความสำคัญ: ${priority})`,
      },
    ],
  };
}
