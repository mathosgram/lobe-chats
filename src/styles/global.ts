import { Theme, css } from 'antd-style';

// Enhanced global styles for ImoogleAI - Beautiful modern design
export default ({ token }: { prefixCls: string; token: Theme }) => css`
  html,
  body,
  #__next {
    position: relative;
    overscroll-behavior: none;
    height: 100%;
    min-height: 100dvh;
    max-height: 100dvh;

    /* Beautiful gradient background */
    background: linear-gradient(135deg, 
      ${token.colorBgLayout} 0%, 
      ${token.colorBgElevated} 50%, 
      ${token.colorBgLayout} 100%);
    
    /* Subtle animated background pattern */
    background-size: 400% 400%;
    animation: gradientShift 20s ease infinite;

    @media (min-device-width: 576px) {
      overflow: hidden;
    }

    /* Improved typography */
    font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-feature-settings: 'cv11', 'ss01';
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Beautiful gradient animation */
  @keyframes gradientShift {
    0%, 100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }

  /* Enhanced scrollbar styling */
  * {
    scrollbar-color: ${token.colorPrimary}40 transparent;
    scrollbar-width: thin;

    ::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }

    ::-webkit-scrollbar-thumb {
      background: linear-gradient(135deg, ${token.colorPrimary}, ${token.colorPrimaryHover});
      border-radius: 12px;
      border: 2px solid transparent;
      background-clip: content-box;
      transition: all 0.3s ease;
    }

    :hover::-webkit-scrollbar-thumb {
      background: linear-gradient(135deg, ${token.colorPrimaryHover}, ${token.colorPrimaryActive});
      box-shadow: 0 2px 8px ${token.colorPrimary}40;
    }

    ::-webkit-scrollbar-track {
      background-color: transparent;
      border-radius: 12px;
    }

    ::-webkit-scrollbar-corner {
      background-color: transparent;
    }
  }

  /* Enhanced focus states with beautiful rings */
  button:focus-visible,
  input:focus-visible,
  select:focus-visible,
  textarea:focus-visible,
  [tabindex]:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px ${token.colorPrimary}30,
                0 4px 12px ${token.colorPrimary}20;
    transition: box-shadow 0.2s ease;
  }

  /* Beautiful loading states */
  .loading-shimmer {
    background: linear-gradient(
      90deg,
      ${token.colorBgContainer} 0%,
      ${token.colorFillSecondary} 50%,
      ${token.colorBgContainer} 100%
    );
    background-size: 200% 100%;
    animation: shimmer 2s infinite;
  }

  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }

  /* Enhanced glass morphism effects */
  .glass-effect {
    background: ${token.colorBgElevated}95;
    backdrop-filter: blur(20px) saturate(180%);
    border: 1px solid ${token.colorBorder}50;
    box-shadow: 
      0 8px 32px ${token.colorPrimary}10,
      inset 0 1px 0 ${token.colorBgElevated}40;
  }

  /* Beautiful card hover effects */
  .card-hover {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    
    &:hover {
      transform: translateY(-4px) scale(1.02);
      box-shadow: 
        0 20px 40px ${token.colorPrimary}15,
        0 8px 16px ${token.colorTextSecondary}10;
    }
  }

  /* Modern button enhancements */
  .btn-modern {
    background: linear-gradient(135deg, ${token.colorPrimary}, ${token.colorPrimaryHover});
    border: none;
    border-radius: 12px;
    box-shadow: 0 4px 12px ${token.colorPrimary}30;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px ${token.colorPrimary}40;
    }
    
    &:active {
      transform: translateY(0);
      box-shadow: 0 2px 8px ${token.colorPrimary}30;
    }
  }

  /* Smooth page transitions */
  .page-transition {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  /* Beautiful selection styling */
  ::selection {
    background: ${token.colorPrimary}30;
    color: ${token.colorText};
  }

  ::-moz-selection {
    background: ${token.colorPrimary}30;
    color: ${token.colorText};
  }
`;
