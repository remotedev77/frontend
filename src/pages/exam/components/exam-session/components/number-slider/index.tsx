import { Card } from "@/common/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/common/components/ui/carousel";
import { cn } from "@/common/lib/utils";
import useExamStore from "@/services/state/examStore";

const NumberSlider = () => {
  const { questions, selectedIndex, setSelectedIndex, answers } = useExamStore();

  const checkAnsweredQuestion = (id: number) => (answers.find(({ q_id }) => q_id === id)?.a_id || []).length > 0;

  return (
    <Carousel
      opts={{
        align: "start",
        dragFree: true,
      }}
      className="absolute inset-x-0 w-full"
    >
      <CarouselContent className="mx-4">
        {questions?.map(({ id }, index) => (
          <CarouselItem key={id} className="pl-1 basis-auto">
            <div className="p-1">
              <Card
                className={cn(
                  "grid text-xs font-semibold cursor-pointer select-none size-10 sm:text-sm sm:size-11 lg:size-12 lg:text-base place-content-center",
                  selectedIndex === index && "border-primary border-2",
                  checkAnsweredQuestion(id) && "bg-primary text-white"
                )}
                onClick={() => setSelectedIndex(index)}
              >
                {index + 1}
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default NumberSlider;
