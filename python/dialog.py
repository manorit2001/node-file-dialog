import tkinter.filedialog
import argparse
import sys
     
parser=argparse.ArgumentParser(
        description="Opens File selection dialog boxes")
parser.add_argument('-d',help="directory open prompt",action='store_true')
parser.add_argument('-o',help='file open prompt',action='store_true')
parser.add_argument('-s',help='file save prompt',action='store_true')
parser.add_argument('-f',help='multiple files open prompt',action='store_true')
args=parser.parse_args()
if len(sys.argv)==1:
    parser.print_help(sys.stderr)
    sys.exit(1)
if args.s:
    print(tkinter.filedialog.asksaveasfilename())
if args.o:
    print(tkinter.filedialog.askopenfilename())
if args.d:
    print(tkinter.filedialog.askdirectory())
if args.f:
    print('\n'.join(tkinter.filedialog.askopenfilenames()))
