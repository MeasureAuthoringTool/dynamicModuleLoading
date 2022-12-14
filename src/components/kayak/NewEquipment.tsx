import { FC } from 'react';
import { useFormik } from 'formik';
const NewEquipment: FC = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      type: '',
      model: ''
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },

  });
  return (
    <div>
    <h1>Add a new kayak</h1>
    <form onSubmit={formik.handleSubmit}>
       <label htmlFor="name"></label>
       <input
         id="name"
         name="name"
         type="name"
         onChange={formik.handleChange}
         value={formik.values.name}
       />
       <select
        name="type"
        style={{ display: 'block' }}
      >
        <option value="" label="Select a type" />
        <option value="play" label="Playboat" />
        <option value="river" label="RiverRunner" />
        <option value="wildwater" label="Wildwater" />
      </select>
       <input
         id="model"
         name="model"
         type="model"
         onChange={formik.handleChange}
         value={formik.values.model}
       />
       <button type="submit">Submit</button>
     </form>
     </div>
  )

}

export default NewEquipment;