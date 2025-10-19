import { cn } from '@/utils/styling'
import { cva } from 'class-variance-authority'
import { Variants, motion } from 'framer-motion'
import { ReactNode, useRef } from 'react'

const modalVariants: Variants = {
    hidden: {
        opacity: 0,
        y: '-100%',
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3,
        },
    },
    exit: {
        opacity: 0,
        y: '100%',
    },
}

// slide in from right
export const modalVariants2 = {
  hidden: {
    opacity: 0,
    x: "100%",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
    },
  },
};


type Props = {
    children: ReactNode
    className?: string
    modalClassName?: any
    variants?: any
    exit?: { y: string; opacity: number }
    backgroundColor? : string

    // this function is an alternative to close response modal in Gated Content details page
    closeResponseModal?:()=>void
}

const ModalWrapper = ({
  children,
  className,
  closeResponseModal,
  modalClassName,
  variants,
  exit,
  backgroundColor,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);

  const defaultclassName = cva(
    `fixed top-0 left-0 w-full h-full ${"flex"} items-center justify-center z-[1000]`
  );

  const defaultModalClass = cva(`w-max min-h-max  z-[1000] shadow-xl modal`);

  return (
    <>
      <motion.div
        onClick={closeResponseModal}
        className={cn(defaultclassName({ className }))}
        style={{
          backgroundColor: `${backgroundColor ?? "rgba(0, 0, 0, .5)"} `,
        }}
        ref={ref2}
        aria-label="modal_wrapper"
        exit={exit ?? { opacity: 0 }}
      >
        <motion.div
          className={cn(
            defaultModalClass({ ...modalClassName }),
            modalClassName
          )}
          initial="hidden"
          animate="visible"
          variants={variants ?? modalVariants}
          ref={ref}
          aria-label="modal_content"
          onClick={(e) => {
            e.stopPropagation();
          }}
          exit={exit ?? { y: "100%", opacity: 0 }}
        >
          {children}
        </motion.div>
      </motion.div>
    </>
  );
};

export default ModalWrapper