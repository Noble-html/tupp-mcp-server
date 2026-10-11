import { z } from "zod";
import { type InferSchema } from "xmcp";

export const schema = {
  studentId: z.string().optional().describe("รหัสนักเรียน 5 หลักเพื่อดึงงานเฉพาะบุคคล"),
};

export const metadata = {
  name: "get_homework_tasks",
  description: "ดึงรายการการบ้านทั้งหมดของนักเรียนจากระบบ TUPP Homework AI",
};

export default async function getTasks({ studentId }: InferSchema<typeof schema>) {
  const mockTasks = [
    { id: "1", title: "การบ้านคณิตศาสตร์เวกเตอร์", subject: "คณิตศาสตร์", status: "PENDING", dueAt: "2026-10-15" },
    { id: "2", title: "รายงานโครงงาน AI", subject: "วิทยาศาสตร์", status: "SUBMITTED", dueAt: "2026-10-12" }
  ];

  return {
    content: [
      {
        type: "text",
        text: JSON.stringify(mockTasks, null, 2),
      },
    ],
  };
}
