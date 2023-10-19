import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import {makeBlankQuestion, duplicateQuestion} from "./objects";

/** #1 (DONE)
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    return questions.map((q:Question): Question => ({...q})).filter(
        (questions: Question) : boolean => questions.published
    );
}

/** #2 (DONE)
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    return questions.map((q:Question): Question => ({...q})).filter(
        (q : Question) : boolean =>
            !(q.body == ""
              && q.expected == ""
              && q.options.length == 0)
    );
}

/*** #3 (DONE)
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(questions: Question[], id: number): Question | undefined {
    return questions.map((q:Question): Question => ({...q})).find(
        (questions : Question) : boolean => questions.id === id
    );
}

/** #4 (DONE)
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    return questions.map((q:Question): Question => ({...q})).filter(
        (questions : Question) : boolean => questions.id != id
    );
}

/*** #5 (DONE)
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    return questions.map((q:Question): Question => ({...q})).map(
        (questions : Question) : string => questions.name
    );
}

/*** #6 (DONE)
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    return questions.map((q:Question): Question => ({...q})).reduce(
        (curSum: number, questions : Question) => curSum + questions.points
    , 0);
}

/*** #7 (DONE)
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    return questions.map((q:Question): Question => ({...q})).reduce(
        (curSum : number, questions : Question) => questions.published ? curSum + questions.points : curSum
    ,0);
}

/*** #8 (DONE)
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
    var firstLine = 'id,name,options,points,published\n';
    var values = questions.map((q:Question): Question => ({...q})).map(
        (questions : Question): string =>
            `${questions.id},${questions.name},${questions.options.length},${questions.points},${questions.published}`).join("\n"
    );
    return firstLine + values;
}

/** #9 (DONE)
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    return questions.map((q:Question): Question => ({...q})).map(
        (questions : Question): Answer => ({
            questionId: questions.id,
            text: "",
            submitted: false,
            correct: false
        })
    );
}

/*** #10 (DONE)
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    return questions.map((q:Question): Question => ({...q})).map(
        (questions : Question): Question => ({...questions, published: true})
    );
}

/*** #11 (DONE)
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    var hasShortAnswers : Question | undefined = [...questions].find((q : Question): boolean => q.type === "short_answer_question");
    var hasMultiChoice : Question | undefined = [...questions].find((q : Question): boolean => q.type === "multiple_choice_question");
    return !(hasMultiChoice && hasShortAnswers);
}

/*** #12 (DONE)
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
    var qCopy = questions.map((q:Question): Question => ({...q}));
    return [...qCopy, makeBlankQuestion(id, name, type)];
}

/*** #13 (DONE)
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    var qCopy = questions.map((q:Question): Question => ({...q}));
    return qCopy.map(
        (questions : Question): Question => ({
            ...questions,
            name: questions.id === targetId ? newName : questions.name
        })
    );
}

/*** #14 (DONE)
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
    var qCopy = questions.map((q:Question): Question => ({...q}));
    return qCopy.map(
        (question : Question) : Question => ({
            ...question,
            type: question.id === targetId ? newQuestionType : question.type,
            options: question.id === targetId && newQuestionType === "short_answer_question" ? [] : question.options
        })
    );
}

/** #15
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
    // Make Deep Copy
    var qCopy = deepCloneQuestions(questions);

    // Search for valid target with ID, return index.
    var validTargetIndex = qCopy.findIndex((q: Question): boolean => q.id === targetId);

    // Verify valid target
    if (validTargetIndex > -1){
        // Check if add to end
        if(targetOptionIndex === -1){
            // Redefine target question options array with new array copy + newOption
            qCopy[validTargetIndex].options = [...qCopy[validTargetIndex].options, newOption];
        }
        // If not adding to end, replace on index
        else {
            spliceReplaceTarget(qCopy, validTargetIndex, targetOptionIndex, newOption);
        }
    }
    // For some reason, although validTarget is defined by the deep copy of the passed parameter,
    // with `.splice` it manipulates the passed parameter.
    // I have tried every way I can think of to disconnect this logic from the parameter - no luck.
    return qCopy;
}

function deepCloneQuestions(questions : Question[]) {
    return questions.map((q: Question) : Question =>({
        ...q,
        options: [...q.options]
        })
    );
}

function spliceReplaceTarget(questions : Question [], validTargetIndex : number, targetIndex : number, newOption : string) {
    questions[validTargetIndex].options.splice(targetIndex, 1, newOption);
}



/*** #16 (DONE)
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
    var qCopy = questions.map((q:Question): Question => ({...q}));
    var targetIndex = qCopy.findIndex((q : Question) => q.id === targetId);
    if(targetIndex > -1){
        qCopy.splice(targetIndex+1, 0, duplicateQuestion(newId, qCopy[targetIndex]) )
    }
    return qCopy;
}
