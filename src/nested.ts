import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion, makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const publishedQ: Question[] = questions.filter(
        (question: Question): boolean => question.published
    );
    return publishedQ;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const nonEmpty: Question[] = questions.filter(
        (question: Question): boolean =>
            !(question.body.length === 0) ||
            !(question.expected.length === 0) ||
            !(question.options.length === 0)
    );
    const questionsClone: Question[] = nonEmpty.map(
        (question: Question): Question => ({ ...question })
    );
    return questionsClone;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const idQuestion: Question[] = questions.filter(
        (question: Question): boolean => question.id === id
    );
    if (idQuestion.length === 0) {
        return null;
    } else {
        return idQuestion[0];
    }
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const noId: Question[] = questions.filter(
        (question: Question): boolean => !(question.id === id)
    );
    return noId;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const stringArr: string[] = questions.map(
        (question: Question): string => question.name
    );
    return stringArr;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const sum: number = questions.reduce(
        (total: number, num: Question) => total + num.points,
        0
    );
    return sum;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const publishArr: Question[] = questions.filter(
        (question: Question): boolean => question.published === true
    );
    const totalPub: number = sumPoints(publishArr);
    return totalPub;
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    const CSVString: string = questions
        .map(
            (question: Question): string =>
                `${question.id},${question.name},${question.options.length},${question.points},${question.published}`
        )
        .join("\n");
    return "id,name,options,points,published\n" + CSVString;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const AnsArr: Answer[] = questions.map(
        (question: Question): Answer => ({
            questionId: question.id,
            text: "",
            submitted: false,
            correct: false
        })
    );
    return AnsArr;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const pubArr: Question[] = questions.map(
        (question: Question): Question => ({
            ...question,
            published: true
        })
    );
    return pubArr;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    const typeArr: QuestionType[] = questions.map(
        (question: Question): QuestionType => question.type
    );
    const qtype: QuestionType = typeArr[0];
    const isSameType = (currentvalue: QuestionType) => currentvalue === qtype;
    return typeArr.every(isSameType);
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    const blankQuestion: Question = makeBlankQuestion(id, name, type);
    const questionsClone: Question[] = questions.map(
        (question: Question): Question => ({
            ...question,
            options: [...question.options]
        })
    );
    questionsClone.push(blankQuestion);
    return questionsClone;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    const questionsClone: Question[] = questions.map(
        (question: Question): Question => ({
            ...question,
            options: [...question.options]
        })
    );
    const renameArr: Question[] = questionsClone.map(
        (Q: Question): Question => {
            if (Q.id === targetId) {
                Q.name = newName;
                return Q;
            } else {
                return Q;
            }
        }
    );
    return renameArr;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    const questionsClone: Question[] = questions.map(
        (question: Question): Question => ({
            ...question,
            options: [...question.options]
        })
    );
    const retypeArr: Question[] = questionsClone.map(
        (Q: Question): Question => {
            if (Q.id === targetId) {
                Q.type = newQuestionType;
                if (newQuestionType !== "multiple_choice_question") {
                    Q.options = [];
                    return Q;
                } else {
                    return Q;
                }
            } else {
                return Q;
            }
        }
    );
    return retypeArr;
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    const questionsClone: Question[] = questions.map(
        (question: Question): Question => ({
            ...question,
            options: [...question.options]
        })
    );
    const reOptionArr: Question[] = questionsClone.map(
        (Q: Question): Question => {
            if (Q.id === targetId) {
                if (targetOptionIndex === -1) {
                    Q.options.push(newOption);
                    return Q;
                } else {
                    Q.options[targetOptionIndex] = newOption;
                    return Q;
                }
            } else {
                return Q;
            }
        }
    );
    return reOptionArr;
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    const questionsClone: Question[] = questions.map(
        (question: Question): Question => ({
            ...question,
            options: [...question.options]
        })
    );
    const idx: number = questionsClone.findIndex((x) => x.id === targetId);
    const dupQuestion: Question = duplicateQuestion(newId, questionsClone[idx]);
    questionsClone.splice(idx + 1, 0, dupQuestion);
    return questionsClone;
}
