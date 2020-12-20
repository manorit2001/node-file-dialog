import tkinter as tk
import tkinter.filedialog
import argparse
import sys
root = tk.Tk()
# Hide it with .withdraw
root.withdraw()
     
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
    temp=tkinter.filedialog.asksaveasfilename()
    if(len(temp)==0):
        print("None")
    else:
        print(temp)
if args.o:
    temp=(tkinter.filedialog.askopenfilename())
    if(len(temp)==0):
        print("None")
    else:
        print(temp)

if args.d:
    temp=(tkinter.filedialog.askdirectory())
    if(len(temp)==0):
        print("None")
    else:
        print(temp)

if args.f:
    temp=(tkinter.filedialog.askopenfilenames())
    if(len(temp)==0):
        print("None")
    else:
        print('\n'.join(temp))

