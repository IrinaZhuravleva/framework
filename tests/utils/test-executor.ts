export {};
// // tslint:disable:no-any
//
// type HookFn = () => Promise<any>;
// type StepFn = () => Promise<any>;
//
// interface Step {
//   mode?: "rest";
//   name: string;
//   fn: StepFn;
// }
//
// interface ExecuteOptions {
//   description?: string;
//   afterAllSteps?: HookFn;
//   afterEachStep?: HookFn;
//   beforeAllSteps?: HookFn;
//   beforeEachStep?: HookFn;
//   steps: Step[];
// }
//
// class TestExecutorClass {
//   /**
//    * Execute Test with steps
//    * @param {ExecuteOptions} options
//    * @returns {Promise<void>}
//    */
//   public async execute(options: ExecuteOptions): Promise<void> {
//     const {
//       afterAllSteps,
//       afterEachStep,
//       beforeAllSteps,
//       beforeEachStep,
//       description,
//       steps,
//     } = options;
//
//     if (description) {
//       Reporter.addDescription(description);
//     }
//
//     if (beforeAllSteps) {
//       Reporter.startStep("Before all steps");
//       await beforeAllSteps();
//       Reporter.endStep();
//     }
//
//     for (const step of steps) {
//       const { mode = "rest" } = step;
//
//       if (beforeEachStep) {
//         Reporter.startStep("Before step hook");
//         await beforeEachStep();
//         Reporter.endStep();
//       }
//
//       Reporter.startStep(step.name);
//       switch (mode) {
//         case "rest":
//           await step.fn();
//           break;
//         default:
//           throw new Error(
//             `Unknown mode "${mode}" was passed to TestExecutor. Value should be one of: ['rest', 'ui', 'db']`
//           );
//       }
//       Reporter.endStep();
//
//       if (afterEachStep) {
//         Reporter.startStep("After step hook");
//         await afterEachStep();
//         Reporter.endStep();
//       }
//     }
//
//     if (afterAllSteps) {
//       Reporter.startStep("After all steps");
//       await afterAllSteps();
//       Reporter.endStep();
//     }
//   }
//
// }
//
// export const TestExecutor = new TestExecutorClass();
