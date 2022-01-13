const cohort1 = process.argv[2];

// process is global node variable
// if third process passed into program is equal to console log web 49 is the best,  
if(cohort1 === 'web-49') {
  console.log(`${cohort1} is the best`);
} else {
  console.log(`boooo cohort ${cohort1}`);
}