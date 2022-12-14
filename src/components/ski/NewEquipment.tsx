import { FC } from 'react';
import { Formik, Form, Field } from 'formik';


const NewEquipment: FC = () => {

  return (
  <div>
    <h1>Add a new set of Skis</h1>
    <Formik
      initialValues={{
        name: '',
        toggle: false,
        checked: [],
      }}
      onSubmit={async (values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
     <Form>
     <label htmlFor="name">Name</label>
        <Field id="name" name="name" />

    
        <div id="checkbox-group">Checked</div>
          <div role="group" aria-labelledby="checkbox-group">
            <label>
              <Field type="checkbox" name="checked" value="slalom" />
              Slalom
            </label>
            <label>
              <Field type="checkbox" name="checked" value="xcountry" />
              X-Country
            </label>
            
          </div>
     <button type="submit">Submit</button>
   </Form>
   </Formik>
   </div>
  )

}

export default NewEquipment;