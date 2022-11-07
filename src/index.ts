import foo from 'path/file';

const init = async () => {
  console.time('Time Taken');
  console.log("Starting...", foo);
  
  console.timeEnd('Time Taken');
};

init();
