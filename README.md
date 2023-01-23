## README
- 推荐安装hugo进行测试，不安装hugo也可以直接修改`/wfst-hugo-test/content`目录下对应的`.md`文件。
- hugo的安装以及网站测试具体操作如下。

## Hugo 安装

- macos:
	- `brew install hugo`
	-  Nots: for other operation systems, see [hugo](https://gohugo.io/getting-started/installing/) for details.

- **推荐用vscode进行调试**

## 网站测试流程

- 下载仓库到本地：`git clone https://github.com/wssuzb/wfst_website_test.git`
- *该测试主题基于：[airspace-hugo](https://github.com/themefisher/airspace-hugo).*
- *由于上传限制，需自行下载[airspace-hugo](https://docs.gethugothemes.com/airspace/theme-installation/)主题，解压后拷贝`/airspace-hugo/themes`目录到该测试文件夹下。(如遇到下载困难，可联系我提供压缩文件)。*
- `hugo server -D` # 该命令生成本地页面预览，-D参数为生成draft文件。
- 修改内容（`.md`文件）只需在`/wfst-hugo-test/content`目录下修改，
	- 中文`/wfst-hugo-test/content/chinese`
	- 英文`/wfst-hugo-test/content/english`
- 注意：图片需放置在`/wfst-hugo-test/static/images/`路径下。
- 修改完文件后，用命令`hugo -D`生成静态页面即可push。