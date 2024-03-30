import { FadeLoader } from 'react-spinners';
import css from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={css.loaderContainer}>
      <FadeLoader color="#d66b36" />
    </div>
  );
};
