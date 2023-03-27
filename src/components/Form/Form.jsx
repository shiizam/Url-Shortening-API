import { useForm } from 'react-hook-form';


export const Form = ({onHandleSubmit}) => {

  // react-hook-form variable
  const { 
    register,
    formState: {errors},
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      url: ''
    }
  });

  const onSubmit = async (data) => {
    const { url } = data;
    onHandleSubmit(url).then((res) => {
      if (res === true) {
        reset();
      }
    });
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    
      <input 
        id='shorten-url-input' 
        type="text"
        placeholder='Shorten a link here...'
        {...register("url", {
          required: {
            value: true,
            message: "Please add a link",
            },
            pattern: {
              value: /^(?:(ftp|http|https):\/\/)?(?:[\w-]+\.)+[a-z]{2,6}$/,
              message: "Please enter a valid URL",
            },
          })
        }
        aria-invalid={errors.url ? true : false}
        style={errors.url ? {outlineColor: 'hsl(0, 87%, 67%'}: null}
        
      />
      {errors.url && <p role="alert" className="error">{errors.url?.message}</p>}

      <button type='submit' className='shorten-btn'>
        Shorten It!
      </button>
    </form>
  )
}
