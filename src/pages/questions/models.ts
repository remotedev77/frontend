import { z } from "zod";

interface Answer {
  id: number;
  answer: string;
  is_correct: boolean;
}

enum Note {
  Multiple = "multiple",
  Single = "single",
}

interface Question {
  id: number;
  answers: Answer[];
  question: string;
  question_code: number;
  image: null;
  correct_answer_description: string;
  work_function: string;
  note: Note;
  direction_type: number;
}

const CreateQuestionSchema = z.object({
  note: z.string().min(1),
  question_code: z.number().min(1),
  question: z.string().min(1),
  // image
  work_function: z.string().min(1),
  answers: z.array(
    z.object({
      answer: z.string().min(1),
      is_correct: z.boolean(),
    })
  ),
  correct_answer_description: z.string().min(1),
});

type CreateQuestion = z.infer<typeof CreateQuestionSchema>;

type UpdateQuestion = Partial<CreateQuestion>;

const UploadQuestionSchema = z.object({
  filename: z
    .any()
    .refine((files) => files, "Файл требуется")
    .refine(
      (files) => "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet".includes(files?.type),
      "Принимаются файлы .xlsx"
    ),
});

type UploadQuestion = z.infer<typeof UploadQuestionSchema>;

export type { Question, Answer, CreateQuestion, UpdateQuestion, UploadQuestion };
export { Note, CreateQuestionSchema, UploadQuestionSchema };
