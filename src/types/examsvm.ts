import { ExamSimulatorVm } from "../pages/ExamSimulator/exam-simulator.vm";
import { FinalTestVm } from "../pages/FinalTest/final-test.vm";
import { MarathonVm } from "../pages/Marathon/marathon.vm";

export type VM =
  | typeof MarathonVm
  | typeof FinalTestVm
  | typeof ExamSimulatorVm;
