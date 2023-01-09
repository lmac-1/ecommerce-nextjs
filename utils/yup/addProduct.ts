import * as yup from 'yup';

export const addProductsSchema = yup.object().shape({
  name: yup.string().required('This field is required'),
  price: yup
    .string()
    .required('This field is required')
    .matches(/^\d+(\.\d{1,2})?$/, 'Invalid price'),
});
