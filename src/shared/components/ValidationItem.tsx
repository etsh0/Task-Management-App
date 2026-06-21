import CheckIcon from '../../assets/icons/CheckIcon';
import UncheckedIcon from '../../assets/icons/UncheckedIcon';

type ValidationItemProps = {
  isValid: boolean;
  text: string;
};

export default function ValidationItem({ isValid, text }: ValidationItemProps) {
  return (
    <>
      <div className="text-label-sm text-neutral leading-[16.5px] flex items-center gap-2">
        {isValid ? <CheckIcon /> : <UncheckedIcon />}
        {text}
      </div>
    </>
  );
}
