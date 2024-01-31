import useSWRMutation from "swr/mutation";

import { Button } from "@/common/components/ui/button";

import useExamStore from "@/services/state/examStore";

import { checkQuestionType } from "@/pages/exam/lib/utils";

import { postData } from "@/services/api/requests";

const FormatStandart = () => {
  const { checkedQuestions, answers, selectedIndex, setCheckedQuestion, questionType } = useExamStore();
  const { trigger } = useSWRMutation(questionType ? checkQuestionType(questionType) : null, postData);

  const handleCheck = async () => {
    const isChecked = checkedQuestions.find(({ checkedIndex }) => checkedIndex === selectedIndex);
    const isAnswerSelected = answers[selectedIndex].a_id.length > 0;
    if (!isChecked && isAnswerSelected) {
      const data = await trigger([answers[selectedIndex]]);
      const checkedQuestion = { ...data[0], checkedIndex: selectedIndex };
      setCheckedQuestion(checkedQuestion);
    }
  };

  return (
    <Button className="w-full h-full text-center border-0 text-balance" variant="outline" onClick={handleCheck}>
      Проверить ответ
    </Button>
  );
};

export default FormatStandart;
