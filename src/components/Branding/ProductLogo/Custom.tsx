import type { IconType } from '@lobehub/icons';
import type { LobeChatProps } from '@lobehub/ui/brand';
import { createStyles, useTheme } from 'antd-style';
import Image, { ImageProps } from 'next/image';
import { ReactNode, forwardRef, memo } from 'react';
import { Flexbox, FlexboxProps } from 'react-layout-kit';

import { BRANDING_LOGO_URL, BRANDING_NAME } from '@/const/branding';

const useStyles = createStyles(({ css, token }) => {
  return {
    extraTitle: css`
      font-weight: 300;
      white-space: nowrap;
      background: linear-gradient(135deg, ${token.colorPrimary}, ${token.colorPrimaryActive});
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    `,
    logoContainer: css`
      filter: drop-shadow(0 4px 12px rgba(99, 102, 241, 0.4));
      transition: all 0.3s ease;
      &:hover {
        filter: drop-shadow(0 6px 16px rgba(99, 102, 241, 0.6));
        transform: translateY(-1px);
      }
    `,
    textLogo: css`
      background: linear-gradient(135deg, #6366f1, #8b5cf6, #a855f7);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-shadow: 0 2px 8px rgba(99, 102, 241, 0.3);
      font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      letter-spacing: -0.02em;
    `,
  };
});

const CustomTextLogo = memo<FlexboxProps & { size: number }>(({ size, style, ...rest }) => {
  const { styles } = useStyles();
  return (
    <Flexbox
      align="center"
      className={styles.textLogo}
      height={size}
      style={{
        fontSize: size / 1.5,
        fontWeight: 700,
        userSelect: 'none',
        ...style,
      }}
      {...rest}
    >
      {BRANDING_NAME}
    </Flexbox>
  );
});

const CustomImageLogo = memo<Omit<ImageProps, 'alt' | 'src'> & { size: number }>(
  ({ size, className, ...rest }) => {
    const { styles } = useStyles();
    return (
      <div className={styles.logoContainer}>
        <Image
          alt={BRANDING_NAME}
          className={className}
          height={size}
          src={BRANDING_LOGO_URL}
          unoptimized={true}
          width={size}
          {...rest}
        />
      </div>
    );
  },
);

const Divider: IconType = forwardRef(({ size = '1em', style, ...rest }, ref) => (
  <svg
    fill="none"
    height={size}
    ref={ref}
    shapeRendering="geometricPrecision"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ 
      filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1))',
      flex: 'none', 
      lineHeight: 1, 
      opacity: 0.6,
      ...style 
    }}
    viewBox="0 0 24 24"
    width={size}
    {...rest}
  >
    <path d="M16.88 3.549L7.12 20.451" />
  </svg>
));

const CustomLogo = memo<LobeChatProps>(({ extra, size = 32, className, style, type, ...rest }) => {
  const theme = useTheme();
  const { styles } = useStyles();
  let logoComponent: ReactNode;

  switch (type) {
    case '3d':
    case 'flat': {
      logoComponent = <CustomImageLogo size={size} style={style} {...rest} />;
      break;
    }
    case 'mono': {
      logoComponent = (
        <CustomImageLogo 
          size={size} 
          style={{ filter: 'grayscale(100%) drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))', ...style }} 
          {...rest} 
        />
      );
      break;
    }
    case 'text': {
      logoComponent = <CustomTextLogo size={size} style={style} {...rest} />;
      break;
    }
    case 'combine': {
      logoComponent = (
        <>
          <CustomImageLogo size={size} />
          <CustomTextLogo size={size} style={{ marginLeft: Math.round(size / 4) }} />
        </>
      );

      if (!extra)
        logoComponent = (
          <Flexbox align={'center'} flex={'none'} horizontal {...rest}>
            {logoComponent}
          </Flexbox>
        );

      break;
    }
    default: {
      logoComponent = <CustomImageLogo size={size} style={style} {...rest} />;
      break;
    }
  }

  if (!extra) return logoComponent;

  const extraSize = Math.round((size / 3) * 1.9);

  return (
    <Flexbox align={'center'} className={className} flex={'none'} horizontal {...rest}>
      {logoComponent}
      <Divider size={extraSize} style={{ color: theme.colorFill, marginLeft: 8, marginRight: 8 }} />
      <div className={styles.extraTitle} style={{ fontSize: extraSize }}>
        {extra}
      </div>
    </Flexbox>
  );
});

export default CustomLogo;
