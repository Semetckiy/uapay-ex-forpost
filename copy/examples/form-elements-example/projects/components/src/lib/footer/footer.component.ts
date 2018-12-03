import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class FooterComponent implements OnInit {

  @Input() footer;

  // @Input() footerItems: {};
  //
  // socialLinks = [];
  // icons =  {
  //   'facebook': 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTFweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMTEgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogc2tldGNodG9vbCA1MS4yICg1NzUxOSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+NTZCQ0U2Q0UtRTFFOS00MkEwLTk0N0EtMkYwOTM4QzNBOTk0PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBza2V0Y2h0b29sLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJIb21lcGFnZSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Im5ld3MvdGFibGV0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNTIxLjAwMDAwMCwgLTIzNDUuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSJmb290ZXIvbWFpbi90YWJsZXQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAxOTkyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9IlNvY2lhbCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTIxLjAwMDAwMCwgMzUzLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJpY29ucy9mYWNlYm9vayI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJCYWNrZ3JvdW5kIiB4PSIwIiB5PSIwIiB3aWR0aD0iMTEiIGhlaWdodD0iMjAiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTcuMzMzODIyMTYsNi42NjY2NjY2NyBMNy4zMzM4MjIxNiw0LjY4MjY2NjY3IEM3LjMzMzgyMjE2LDMuNzg2NjY2NjcgNy41NTA4NTk4OSwzLjMzMzMzMzMzIDkuMDgwMzg5MjgsMy4zMzMzMzMzMyBMMTEsMy4zMzMzMzMzMyBMMTEsMCBMNy43OTcyMjcwNCwwIEMzLjg3Mjk1MDI3LDAgMi41NzgwNTYyNiwxLjYzNiAyLjU3ODA1NjI2LDQuNDQyNjY2NjcgTDIuNTc4MDU2MjYsNi42NjY2NjY2NyBMMCw2LjY2NjY2NjY3IEwwLDEwIEwyLjU3ODA1NjI2LDEwIEwyLjU3ODA1NjI2LDIwIEw3LjMzMjM1NTY5LDIwIEw3LjMzMjM1NTY5LDEwIEwxMC41NjI5OTE2LDEwIEwxMC45OTg1MzM1LDYuNjY2NjY2NjcgTDcuMzMyMzU1NjksNi42NjY2NjY2NyBMNy4zMzM4MjIxNiw2LjY2NjY2NjY3IFoiIGlkPSJmYWNlYm9vayIgZmlsbD0iI0JCQkJCQiIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=',
  //   'twitter': 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMjAgMTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogc2tldGNodG9vbCA1MS4yICg1NzUxOSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+MDcwMjBBMkMtQTM2NS00MkYyLUIxODgtMzNERjg2N0RFNzIzPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBza2V0Y2h0b29sLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJIb21lcGFnZSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Im5ld3MvdGFibGV0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNTc2LjAwMDAwMCwgLTIzNDcuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSJmb290ZXIvbWFpbi90YWJsZXQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAxOTkyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9IlNvY2lhbCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTIxLjAwMDAwMCwgMzUzLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJpY29ucy90d2l0dGVyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1NS4wMDAwMDAsIDIuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJCYWNrZ3JvdW5kIiB4PSIwIiB5PSIwIiB3aWR0aD0iMjAiIGhlaWdodD0iMTYiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTIwLDEuOTAzODcxNDkgQzE5LjI2Mzg4ODksMi4yMjQ1NDYxOCAxOC40NzQwNTIzLDIuNDQyMDI0MSAxNy42NDQxODMsMi41MzkxMTY0NyBDMTguNDkxNTM1OSwyLjA0MDI1NzAzIDE5LjE0MDE2MzQsMS4yNDg5OTU5OCAxOS40NDc1ODE3LDAuMzA5MDQ0MTc3IEMxOC42NTI3NDUxLDAuNzcxMDIwMDggMTcuNzc1MzkyMiwxLjEwNjQ3MzkgMTYuODQwNTU1NiwxLjI4ODMyMTI5IEMxNi4wOTE5NjA4LDAuNTAzMTk2Nzg3IDE1LjAyNzE1NjksMC4wMTQxNjg2NzQ3IDEzLjg0NjExMTEsMC4wMTQxNjg2NzQ3IEMxMS41ODAyOTQxLDAuMDE0MTY4Njc0NyA5Ljc0MzEzNzI1LDEuODIwMzM3MzUgOS43NDMxMzcyNSw0LjA0NjcxNDg2IEM5Ljc0MzEzNzI1LDQuMzYyNDczOSA5Ljc3OTM3OTA4LDQuNjcwODc1NSA5Ljg0OTM3OTA4LDQuOTY1NzgzMTMgQzYuNDQwMDMyNjgsNC43OTc0Mjk3MiAzLjQxNjg2Mjc1LDMuMTkxNTUwMiAxLjM5MzQ5NjczLDAuNzUxMzU3NDMgQzEuMDM5ODAzOTIsMS4zNDYwNTYyMiAwLjgzODU5NDc3MSwyLjAzOTAwNDAyIDAuODM4NTk0NzcxLDIuNzc4Njk4OCBDMC44Mzg1OTQ3NzEsNC4xNzgxODQ3NCAxLjU2MzQ2NDA1LDUuNDEzMDEyMDUgMi42NjMyNjc5Nyw2LjEzNTQ1MzgyIEMxLjk5MDg4MjM1LDYuMTEzMzQ5NCAxLjM1ODQ5NjczLDUuOTMxNTAyMDEgMC44MDQ4NjkyODEsNS42MjkyMzY5NSBMMC44MDQ4NjkyODEsNS42Nzk2MTQ0NiBDMC44MDQ4NjkyODEsNy42MzMyMjA4OCAyLjIxOTYwNzg0LDkuMjYzNjc4NzEgNC4wOTU0OTAyLDkuNjM0NzYzMDUgQzMuNzUxNzk3MzksOS43MjU2ODY3NSAzLjM4OTM3OTA4LDkuNzc2MDY0MjYgMy4wMTQ0NDQ0NCw5Ljc3NjA2NDI2IEMyLjc0OTUwOTgsOS43NzYwNjQyNiAyLjQ5MzMwMDY1LDkuNzUwMjY1MDYgMi4yNDIwOTE1LDkuNzAxMTA4NDMgQzIuNzY0NDc3MTIsMTEuMzA0NTQ2MiA0LjI3OTIxNTY5LDEyLjQ3MDU1NDIgNi4wNzM4ODg4OSwxMi41MDI1MjIxIEM0LjY3MDM5MjE2LDEzLjU4Mzc3NTEgMi45MDA3MTg5NSwxNC4yMjYzNzc1IDAuOTc4NTk0NzcxLDE0LjIyNjM3NzUgQzAuNjQ3NDE4MzAxLDE0LjIyNjM3NzUgMC4zMjEyMDkxNSwxNC4yMDY3MTQ5IDMuMjY3OTczNjNlLTA1LDE0LjE3MTA4NDMgQzEuODE1OTQ3NzEsMTUuMzE3NDYxOCAzLjk3MTc5NzM5LDE1Ljk4NTg2MzUgNi4yODg4NTYyMSwxNS45ODU4NjM1IEMxMy44MzYxNzY1LDE1Ljk4NTg2MzUgMTcuOTYxNjY2Nyw5LjgzOTk2Nzg3IDE3Ljk2MTY2NjcsNC41MDk5NDM3OCBMMTcuOTQ3OTA4NSwzLjk4Nzc1OTA0IEMxOC43NTM5ODY5LDMuNDIyNTIyMDkgMTkuNDUxMzM5OSwyLjcxMjM1MzQxIDIwLDEuOTAzODcxNDkgWiIgaWQ9InR3aXR0ZXIiIGZpbGw9IiNCQkJCQkIiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+',
  //   'linkedin': 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogc2tldGNodG9vbCA1MS4yICg1NzUxOSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+OUYxRkQwMDItRUIxQi00RkUyLTk0QkMtMDVBNDVGNzY0NDcxPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBza2V0Y2h0b29sLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJIb21lcGFnZSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Im5ld3MvdGFibGV0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjM2LjAwMDAwMCwgLTIzNDUuMDAwMDAwKSIgZmlsbD0iI0JCQkJCQiIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPGcgaWQ9ImZvb3Rlci9tYWluL3RhYmxldCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDE5OTIuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iU29jaWFsIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MjEuMDAwMDAwLCAzNTMuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Imljb25zL0xpbmtlZEluIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTUuMDAwMDAwLCAwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTkuOTU5MDI1NSwxMi4yNTkzNjg5IEwxOS45NTkwMjU1LDE5Ljk3ODY0MDggTDE1LjY4MTE2MDEsMTkuOTc4NjQwOCBMMTUuNjgxMTYwMSwxMi43NzYzNTkyIEMxNS42ODExNjAxLDEwLjk2NzA4NzQgMTUuMDYyNDEzLDkuNzMyMzMwMSAxMy41MTM5Njc1LDkuNzMyMzMwMSBDMTIuMzMxOTI1OCw5LjczMjMzMDEgMTEuNjI4NDkxOSwxMC41NjQ0NjYgMTEuMzE5MDI1NSwxMS4zNjk0MTc1IEMxMS4yMDYxNzE3LDExLjY1NzE4NDUgMTEuMTc3MTIzLDEyLjA1NzcxODQgMTEuMTc3MTIzLDEyLjQ2MDUzNCBMMTEuMTc3MTIzLDE5Ljk3ODY0MDggTDYuODk3ODE5MDMsMTkuOTc4NjQwOCBDNi44OTc4MTkwMywxOS45Nzg2NDA4IDYuOTU1NDUyNDQsNy43ODAzMzk4MSA2Ljg5NzgxOTAzLDYuNTE2NTA0ODUgTDExLjE3NjcwNTMsNi41MTY1MDQ4NSBMMTEuMTc2NzA1Myw4LjQyNDcwODc0IEMxMS4xNjgwMjc4LDguNDM4OTgwNTggMTEuMTU2NzUxNyw4LjQ1NDM2ODkzIDExLjE0ODU4NDcsOC40NjgyMDM4OCBMMTEuMTc2NzA1Myw4LjQ2ODIwMzg4IEwxMS4xNzY3MDUzLDguNDI0NzA4NzQgQzExLjc0NTE5NzIsNy41MDg3Mzc4NiAxMi43NjA0NjQsNi4yMDAyNDI3MiAxNS4wMzI5NDY2LDYuMjAwMjQyNzIgQzE3Ljg0ODM5OTEsNi4yMDAxOTQxNyAxOS45NTkwMjU1LDguMTI0MzIwMzkgMTkuOTU5MDI1NSwxMi4yNTkzNjg5IFogTTIuNDIxNDg0OTIsMC4wMjcwODczNzg2IEMwLjk1NzU0MDYwMywwLjAyNzA4NzM3ODYgMCwxLjAzMTYwMTk0IDAsMi4zNTI1NzI4MiBDMCwzLjY0NDc1NzI4IDAuOTI5ODM3NTg3LDQuNjc5NzU3MjggMi4zNjQ2ODY3Nyw0LjY3OTc1NzI4IEwyLjM5MzI3MTQ2LDQuNjc5NzU3MjggQzMuODg1NTY4NDUsNC42Nzk3NTcyOCA0LjgxMzY0MjY5LDMuNjQ0OTUxNDYgNC44MTM2NDI2OSwyLjM1MjU3MjgyIEM0Ljc4NTUyMjA0LDEuMDMxNjAxOTQgMy44ODU1Njg0NSwwLjAyNzA4NzM3ODYgMi40MjE0ODQ5MiwwLjAyNzA4NzM3ODYgWiBNMC4yNTQxNTMxMzIsMTkuOTc4NjQwOCBMNC41MzE4MzI5NSwxOS45Nzg2NDA4IEw0LjUzMTgzMjk1LDYuNTE2NTA0ODUgTDAuMjU0MTUzMTMyLDYuNTE2NTA0ODUgTDAuMjU0MTUzMTMyLDE5Ljk3ODY0MDggWiIgaWQ9IkxpbmtlZEluIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=',
  //   'youtube': 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjNweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMjMgMTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogc2tldGNodG9vbCA1MS4yICg1NzUxOSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+NkY1NjE5QjEtNzczQy00RkNFLThFQjYtMUM5RjA1QTc0QzM3PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBza2V0Y2h0b29sLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJIb21lcGFnZSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Im5ld3MvdGFibGV0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjk2LjAwMDAwMCwgLTIzNDcuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSJmb290ZXIvbWFpbi90YWJsZXQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAxOTkyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9IlNvY2lhbCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTIxLjAwMDAwMCwgMzUzLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJpY29ucy95b3V0dWJlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNzUuMDAwMDAwLCAyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iQmFja2dyb3VuZCIgeD0iMCIgeT0iMCIgd2lkdGg9IjIzIiBoZWlnaHQ9IjE2Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yMi4wMjI1LDEuNTQxODE4MTggQzIxLjM5ODYyNSwwLjQxODkwOTA5MSAyMC43MjE1NjI1LDAuMjEyMzYzNjM2IDE5LjM0MywwLjEzMzgxODE4MiBDMTcuOTY1ODc1LDAuMDM5MjcyNzI3MyAxNC41MDI5Mzc1LDAgMTEuNTAyODc1LDAgQzguNDk3MDYyNSwwIDUuMDMyNjg3NSwwLjAzOTI3MjcyNzMgMy42NTcsMC4xMzIzNjM2MzYgQzIuMjgxMzEyNSwwLjIxMjM2MzYzNiAxLjYwMjgxMjUsMC40MTc0NTQ1NDUgMC45NzMxODc1LDEuNTQxODE4MTggQzAuMzMwNjI1LDIuNjYzMjcyNzMgMCw0LjU5NDkwOTA5IDAsNy45OTU2MzYzNiBDMCw3Ljk5ODU0NTQ1IDAsOCAwLDggQzAsOC4wMDI5MDkwOSAwLDguMDA0MzYzNjQgMCw4LjAwNDM2MzY0IEwwLDguMDA3MjcyNzMgQzAsMTEuMzkzNDU0NSAwLjMzMDYyNSwxMy4zMzk2MzY0IDAuOTczMTg3NSwxNC40NDk0NTQ1IEMxLjYwMjgxMjUsMTUuNTcyMzYzNiAyLjI3OTg3NSwxNS43NzYgMy42NTU1NjI1LDE1Ljg3MDU0NTUgQzUuMDMyNjg3NSwxNS45NTIgOC40OTcwNjI1LDE2IDExLjUwMjg3NSwxNiBDMTQuNTAyOTM3NSwxNiAxNy45NjU4NzUsMTUuOTUyIDE5LjM0NDQzNzUsMTUuODcyIEMyMC43MjMsMTUuNzc3NDU0NSAyMS40MDAwNjI1LDE1LjU3MzgxODIgMjIuMDIzOTM3NSwxNC40NTA5MDkxIEMyMi42NzIyNSwxMy4zNDEwOTA5IDIzLDExLjM5NDkwOTEgMjMsOC4wMDg3MjcyNyBDMjMsOC4wMDg3MjcyNyAyMyw4LjAwNDM2MzY0IDIzLDguMDAxNDU0NTUgQzIzLDguMDAxNDU0NTUgMjMsNy45OTg1NDU0NSAyMyw3Ljk5NzA5MDkxIEMyMyw0LjU5NDkwOTA5IDIyLjY3MjI1LDIuNjYzMjcyNzMgMjIuMDIyNSwxLjU0MTgxODE4IFogTTguNjI1LDEyLjM2MzYzNjQgTDguNjI1LDMuNjM2MzYzNjQgTDE1LjgxMjUsOCBMOC42MjUsMTIuMzYzNjM2NCBaIiBpZD0ieW91dHViZSIgZmlsbD0iI0JCQkJCQiIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=',
  // };

  constructor() { }

  ngOnInit() {

    // for(let i = 0; i < this.footerItems['socials'].length; i++) {
    //   switch (this.footerItems['socials'][i].caption) {
    //
    //     case 'facebook':
    //       this.socialLinks.push({ 'img': this.icons.facebook, 'link': this.footerItems['socials'][i].path });
    //       break;
    //
    //     case 'twitter':
    //       this.socialLinks.push({ 'img': this.icons.twitter, 'link': this.footerItems['socials'][i].path });
    //       break;
    //
    //     case 'linkedin':
    //       this.socialLinks.push({ 'img': this.icons.linkedin, 'link': this.footerItems['socials'][i].path });
    //       break;
    //
    //     case 'youtube':
    //       this.socialLinks.push({ 'img': this.icons.youtube, 'link': this.footerItems['socials'][i].path });
    //       break;
    //
    //   }
    // }

  }

  test() {
    console.log(this.footer);
  }

}
