import DefaultTheme from 'vitepress/theme';
import '@vmono-seed/vant-kit/style.css';
import { AntDesignContainer } from '@vitepress-demo-preview/component';
import '@vitepress-demo-preview/component/dist/style.css';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('DemoPreview', AntDesignContainer);
  },
};
