import { useQuery } from "@tanstack/react-query";
import { getQuizByID } from "@/services/quizzes.service";
import { DetailedQuiz } from "@/types/quizzes.types";
import { useParams } from "next/navigation";

export const useDetailedQuiz = () => {
  const { id } = useParams();

  return useQuery<DetailedQuiz>({
    queryKey: ["detailedQuiz", id],
    queryFn: () => getQuizByID(id as string),
  });
};
