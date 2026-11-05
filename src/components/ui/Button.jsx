import styles from './Button.module.css'

const variantMap = {
  primary: styles.primary,
  outlineLight: styles.outlineLight,
}

function Button({
  as: Tag = 'button',
  variant = 'primary',
  className = '',
  children,
  ...props
}) {
  const variantClass = variantMap[variant] || styles.primary

  return (
    <Tag className={`${styles.btn} ${variantClass} ${className}`} {...props}>
      {children}
    </Tag>
  )
}

export default Button