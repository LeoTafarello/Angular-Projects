export interface Task{   // exporta a interface Task para ser usada em outros arquivos, pois se tiver algo de task tem que estar na pasta task
  id: string;
  userId: string;
  title:  string;
  summary: string;
  dueDate: string;
}