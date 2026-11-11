# 电力电子符号库

本项目收录了 22 个 SVG 格式的电力电子符号，适用于电路原理图、论文和演示文稿。

电力电子 SVG 符号展示。双击 `index.html` 即可查看全部图片，无需选择 JSON、启动服务器或安装依赖。点击图片打开原始 SVG，图片下方的 **Download** 按钮下载单个文件，顶部 **Download All (ZIP)** 按钮下载全部 SVG 压缩包。

[下载全部 SVG（ZIP 压缩包）](Power_Electronics_Symbols_SVG.zip)

## 符号预览

本地双击 `index.html` 或访问部署后的 GitHub Pages 网站，即可直接查看符号。图片展示不依赖 JavaScript，也不需要加载 JSON 文件。

在 GitHub 仓库首页也可以直接查看以下全部符号：

| | | |
| --- | --- | --- |
| ![MOSFET](SVG/MOSFET.svg) | ![二极管 1](SVG/Diode_1.svg) | ![二极管 2](SVG/Diode_2.svg) |
| MOSFET | 二极管 1 | 二极管 2 |
| ![二极管 3](SVG/Diode_3.svg) | ![电容 1](SVG/Capacitor_1.svg) | ![电容 2](SVG/Capacitor_2.svg) |
| 二极管 3 | 电容 1 | 电容 2 |
| ![电容 2.1](SVG/Capacitor_2_1.svg) | ![电阻 1](SVG/Resistor_1.svg) | ![电阻 2](SVG/Resistor_2.svg) |
| 电容 2.1 | 电阻 1 | 电阻 2 |
| ![电感 1](SVG/Inductor_1.svg) | ![电感 2](SVG/Inductor_2.svg) | ![变压器 1](SVG/Transformer_1.svg) |
| 电感 1 | 电感 2 | 变压器 1 |
| ![变压器 2](SVG/Transformer_2.svg) | ![交流源 1](SVG/AC%20Source_1.svg) | ![交流源 2](SVG/AC%20Source_2.svg) |
| 变压器 2 | 交流源 1 | 交流源 2 |
| ![直流源 1](SVG/DC%20Source_1.svg) | ![直流源 2](SVG/DC%20Source_2.svg) | ![直流源 3](SVG/DC%20Source_3.svg) |
| 直流源 1 | 直流源 2 | 直流源 3 |
| ![直流源 4](SVG/DC%20Source_4.svg) | ![直流源 5](SVG/DC%20Source_5.svg) | ![跨线符号](SVG/Cross.svg) |
| 直流源 4 | 直流源 5 | 跨线符号 |
| ![圆点符号](SVG/Dot.svg) | | |
| 圆点符号 | | |

## 文件说明

- `index.html`：符号展示页面，直接引用每个 SVG，提供单个下载和打包下载入口。
- `assets/css/style.css`：页面样式及手机、桌面端的自适应布局。
- `assets/js/app.js`：图片加载失败时显示提示，不影响正常图片的展示。
- `SVG/`：原始 SVG 文件，保留原文件名和图形内容。
- `Power_Electronics_Symbols_SVG.zip`：全部 22 个原始 SVG 的压缩包，文件位于包内的 `SVG/` 文件夹中。
- `Illustrator/Power_Electronics_Symbols.ai`：原始 Illustrator 源文件，内容未修改。
- `data/symbols.json`：保留供参考的资源清单，展示页面不读取此文件。
- `todo.md`：最初的任务说明；当前页面已按后续要求简化。

## 添加新符号

1. 将新 SVG 文件放入 `SVG/` 文件夹。
2. 在 `index.html` 中复制一个已有的 `.symbol-card` 区块，修改原图链接、图片路径、名称和替代文本（`alt`）。链接中的空格使用 `%20` 编码。
3. 修改该区块中 **Download** 按钮的链接及下载文件名（`download` 属性）。
4. 在本 README 的预览表格中添加对应图片，并更新 `data/symbols.json` 资源清单。
5. 使用更新后的 `SVG/` 文件夹重新生成 `Power_Electronics_Symbols_SVG.zip`，保证总下载按钮提供最新的完整资源。

修改已有 SVG 后，也需要重新生成压缩包。

## 部署到 GitHub Pages

1. 将项目上传到 GitHub 仓库，确保 `index.html` 位于仓库根目录，保留目录结构和文件名。
2. 打开仓库的 **Settings → Pages**，选择 **Deploy from a branch**，指定发布分支和 **/ (root)** 目录，然后保存。
3. 等待部署完成，将 GitHub 显示的网站地址分享给其他人，打开即可查看全部 SVG。

上传后，仓库 README 也会直接展示 SVG 图片。启用 GitHub Pages 后，可分享独立网页地址，打开即显示全部符号。

仓库地址及网站地址：部署后填写。

## 许可证

许可证待项目所有者选择，目前未添加 `LICENSE` 文件。
