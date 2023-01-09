import { useReducer } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { addProductsSchema } from '../../utils/yup/addProduct';
import TextField from '../../components/form/TextField';

type FormData = {
  name: string;
  description: string;
  image: string;
  price: string;
};

type Action =
  | { type: 'request' }
  | { type: 'success' }
  | { type: 'failure'; payload: string };

type State = {
  loading: boolean;
  error?: string;
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'request':
      return { ...state, loading: true, error: '' };
    case 'success':
      return { ...state, loading: false, error: '' };
    case 'failure':
      return { ...state, loading: false, error: action.payload };
  }
}

export default function AddProduct() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(addProductsSchema) });

  const [{ loading, error }, dispatch] = useReducer(reducer, {
    loading: false,
    error: '',
  });

  const onSubmit = async (data: any) => {
    try {
      const { name, description, image, price } = data;
      dispatch({ type: 'request' });
      await axios.post('/api/product/add', {
        name,
        description,
        image,
        price: parseFloat(price),
      });
      dispatch({ type: 'success' });
    } catch (err) {
      console.error(err);
      dispatch({ type: 'failure', payload: 'Sorry, an error has occurred' });
    }
  };
  return (
    <>
      <h1 className="text-lg font-bold my-3">Add product</h1>
      <div className="max-w-xs">
        {loading ? (
          <p>Loading</p>
        ) : error ? (
          <h1>{error}</h1>
        ) : (
          <>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                name="name"
                label="Product name"
                register={register}
                errors={errors}
              />
              <TextField
                name="description"
                label="Product description"
                register={register}
                errors={errors}
              />
              <TextField
                name="image"
                label="Image URL"
                register={register}
                errors={errors}
              />
              <TextField
                name="price"
                label="Price"
                register={register}
                errors={errors}
              />
              <button>Submit</button>
            </form>
          </>
        )}
      </div>
    </>
  );
}
