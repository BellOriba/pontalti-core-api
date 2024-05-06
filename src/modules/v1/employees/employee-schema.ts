import { Classification } from '@pontalti/types/employee.types';
import * as yup from 'yup';

const createEmployeeSchema = yup.object({
  body: yup.object({
    name: yup.string().required(),
    phone: yup.string().required(),
    cel_number: yup.string().required(),
    cpf: yup.string().required(),
    classification: yup.mixed<Classification>().oneOf([Classification.funcionario, Classification.em_teste, Classification.externo]).required(),
    admission: yup.date().required(),
    salary: yup.number().optional(),
    dismissal_date: yup.date().optional()
  })
})

export {
  createEmployeeSchema
}
