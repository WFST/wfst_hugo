## README

- 推荐安装hugo进行测试，不安装hugo也可以直接修改 `/content`目录下对应的 `.md`文件。
- hugo的安装以及网站测试具体操作如下。

## Hugo 安装

- macos:
  - `brew install hugo`
  - Nots: for other operation systems, see [hugo](https://gohugo.io/getting-started/installing/) for details.
- **推荐用vscode进行调试**

## 网站测试流程

该测试主题基于：[airspace-hugo](https://github.com/themefisher/airspace-hugo),其将作为子模块被引用,一般来说，不要在子模块目录下做改动，方便拉取子模块的更新.

1. 下载仓库到本地：`git clone --recursive https://github.com/WFST/wfst_hugo.git`，如成功下载了子模块，可直接跳到步骤5.
2. 让git先根据/.gitmodules初始化子模块：`git submodule init`
3. 然后下载子模块：`git submodule update`
4. 等待安装完毕即可，如果子模块下载失败，很可能是网络问题，需要多试几次或者科学上网。
5. `hugo server -D` # 该命令生成本地页面预览，-D参数为生成draft文件。
6. 修改内容（`.md`文件）只需在 `/content`目录下修改，
  - 中文 `/content/chinese`
  - 英文 `/content/english`
7. 注意：图片需放置在 `/static/images/`路径下。
8. 修改完文件后，用命令 `hugo`生成静态页面即可push。

