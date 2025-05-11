export default function InputError({ children }) {
  return (
    <p>
      {formik.touched.email && formik.errors.email && (
        <div className="text-red-700">{formik.errors.email}</div>
      )}
    </p>
  );
}
