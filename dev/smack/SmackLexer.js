// Generated from ./Smack.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4');


var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0002*\u0116\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e",
    "\t\u001e\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#",
    "\t#\u0004$\t$\u0004%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004",
    "*\t*\u0004+\t+\u0004,\t,\u0004-\t-\u0004.\t.\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003",
    "\t\u0003\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011",
    "\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013",
    "\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014",
    "\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015",
    "\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0018\u0003\u0018",
    "\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b",
    "\u0003\u001c\u0003\u001c\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001e",
    "\u0003\u001e\u0003\u001e\u0003\u001f\u0003\u001f\u0003 \u0003 \u0003",
    " \u0003!\u0003!\u0003\"\u0003\"\u0003\"\u0003#\u0003#\u0003#\u0003$",
    "\u0003$\u0003$\u0003%\u0006%\u00c5\n%\r%\u000e%\u00c6\u0003%\u0007%",
    "\u00ca\n%\f%\u000e%\u00cd\u000b%\u0003&\u0003&\u0003&\u0003&\u0007&",
    "\u00d3\n&\f&\u000e&\u00d6\u000b&\u0003&\u0003&\u0003&\u0003&\u0003\'",
    "\u0006\'\u00dd\n\'\r\'\u000e\'\u00de\u0003\'\u0003\'\u0003(\u0003(\u0003",
    "(\u0007(\u00e6\n(\f(\u000e(\u00e9\u000b(\u0003(\u0003(\u0003)\u0003",
    ")\u0003)\u0005)\u00f0\n)\u0003*\u0003*\u0003*\u0003*\u0003*\u0003*\u0003",
    "+\u0003+\u0003,\u0003,\u0003,\u0006,\u00fd\n,\r,\u000e,\u00fe\u0003",
    ",\u0005,\u0102\n,\u0003,\u0003,\u0003,\u0003,\u0005,\u0108\n,\u0003",
    "-\u0003-\u0003-\u0007-\u010d\n-\f-\u000e-\u0110\u000b-\u0005-\u0112",
    "\n-\u0003.\u0003.\u0003.\u0002\u0002/\u0003\u0003\u0005\u0004\u0007",
    "\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017",
    "\r\u0019\u000e\u001b\u000f\u001d\u0010\u001f\u0011!\u0012#\u0013%\u0014",
    "\'\u0015)\u0016+\u0017-\u0018/\u00191\u001a3\u001b5\u001c7\u001d9\u001e",
    ";\u001f= ?!A\"C#E$G%I&K\'M(O)Q\u0002S\u0002U\u0002W*Y\u0002[\u0002\u0003",
    "\u0002\f\u0006\u0002&&C\\aac|\u0007\u0002&&2;C\\aac|\u0003\u0002\f\f",
    "\u0005\u0002\u000b\f\u000f\u000f\"\"\u0004\u0002$$^^\n\u0002$$11^^d",
    "dhhppttvv\u0005\u00022;CHch\u0003\u00022;\u0003\u00023;\u0004\u0002",
    "GGgg\u011d\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002",
    "\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002",
    "\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002",
    "\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002",
    "\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003\u0002",
    "\u0002\u0002\u0002\u0017\u0003\u0002\u0002\u0002\u0002\u0019\u0003\u0002",
    "\u0002\u0002\u0002\u001b\u0003\u0002\u0002\u0002\u0002\u001d\u0003\u0002",
    "\u0002\u0002\u0002\u001f\u0003\u0002\u0002\u0002\u0002!\u0003\u0002",
    "\u0002\u0002\u0002#\u0003\u0002\u0002\u0002\u0002%\u0003\u0002\u0002",
    "\u0002\u0002\'\u0003\u0002\u0002\u0002\u0002)\u0003\u0002\u0002\u0002",
    "\u0002+\u0003\u0002\u0002\u0002\u0002-\u0003\u0002\u0002\u0002\u0002",
    "/\u0003\u0002\u0002\u0002\u00021\u0003\u0002\u0002\u0002\u00023\u0003",
    "\u0002\u0002\u0002\u00025\u0003\u0002\u0002\u0002\u00027\u0003\u0002",
    "\u0002\u0002\u00029\u0003\u0002\u0002\u0002\u0002;\u0003\u0002\u0002",
    "\u0002\u0002=\u0003\u0002\u0002\u0002\u0002?\u0003\u0002\u0002\u0002",
    "\u0002A\u0003\u0002\u0002\u0002\u0002C\u0003\u0002\u0002\u0002\u0002",
    "E\u0003\u0002\u0002\u0002\u0002G\u0003\u0002\u0002\u0002\u0002I\u0003",
    "\u0002\u0002\u0002\u0002K\u0003\u0002\u0002\u0002\u0002M\u0003\u0002",
    "\u0002\u0002\u0002O\u0003\u0002\u0002\u0002\u0002W\u0003\u0002\u0002",
    "\u0002\u0003]\u0003\u0002\u0002\u0002\u0005b\u0003\u0002\u0002\u0002",
    "\u0007d\u0003\u0002\u0002\u0002\tf\u0003\u0002\u0002\u0002\u000bk\u0003",
    "\u0002\u0002\u0002\rm\u0003\u0002\u0002\u0002\u000fo\u0003\u0002\u0002",
    "\u0002\u0011q\u0003\u0002\u0002\u0002\u0013s\u0003\u0002\u0002\u0002",
    "\u0015u\u0003\u0002\u0002\u0002\u0017w\u0003\u0002\u0002\u0002\u0019",
    "{\u0003\u0002\u0002\u0002\u001b~\u0003\u0002\u0002\u0002\u001d\u0083",
    "\u0003\u0002\u0002\u0002\u001f\u0089\u0003\u0002\u0002\u0002!\u008b",
    "\u0003\u0002\u0002\u0002#\u008d\u0003\u0002\u0002\u0002%\u008f\u0003",
    "\u0002\u0002\u0002\'\u0094\u0003\u0002\u0002\u0002)\u009a\u0003\u0002",
    "\u0002\u0002+\u009f\u0003\u0002\u0002\u0002-\u00a1\u0003\u0002\u0002",
    "\u0002/\u00a3\u0003\u0002\u0002\u00021\u00a5\u0003\u0002\u0002\u0002",
    "3\u00a7\u0003\u0002\u0002\u00025\u00a9\u0003\u0002\u0002\u00027\u00ab",
    "\u0003\u0002\u0002\u00029\u00ad\u0003\u0002\u0002\u0002;\u00b0\u0003",
    "\u0002\u0002\u0002=\u00b3\u0003\u0002\u0002\u0002?\u00b5\u0003\u0002",
    "\u0002\u0002A\u00b8\u0003\u0002\u0002\u0002C\u00ba\u0003\u0002\u0002",
    "\u0002E\u00bd\u0003\u0002\u0002\u0002G\u00c0\u0003\u0002\u0002\u0002",
    "I\u00c4\u0003\u0002\u0002\u0002K\u00ce\u0003\u0002\u0002\u0002M\u00dc",
    "\u0003\u0002\u0002\u0002O\u00e2\u0003\u0002\u0002\u0002Q\u00ec\u0003",
    "\u0002\u0002\u0002S\u00f1\u0003\u0002\u0002\u0002U\u00f7\u0003\u0002",
    "\u0002\u0002W\u0107\u0003\u0002\u0002\u0002Y\u0111\u0003\u0002\u0002",
    "\u0002[\u0113\u0003\u0002\u0002\u0002]^\u0007r\u0002\u0002^_\u0007c",
    "\u0002\u0002_`\u0007e\u0002\u0002`a\u0007m\u0002\u0002a\u0004\u0003",
    "\u0002\u0002\u0002bc\u0007=\u0002\u0002c\u0006\u0003\u0002\u0002\u0002",
    "de\u0007?\u0002\u0002e\b\u0003\u0002\u0002\u0002fg\u0007h\u0002\u0002",
    "gh\u0007w\u0002\u0002hi\u0007p\u0002\u0002ij\u0007e\u0002\u0002j\n\u0003",
    "\u0002\u0002\u0002kl\u0007*\u0002\u0002l\f\u0003\u0002\u0002\u0002m",
    "n\u0007.\u0002\u0002n\u000e\u0003\u0002\u0002\u0002op\u0007+\u0002\u0002",
    "p\u0010\u0003\u0002\u0002\u0002qr\u00070\u0002\u0002r\u0012\u0003\u0002",
    "\u0002\u0002st\u0007]\u0002\u0002t\u0014\u0003\u0002\u0002\u0002uv\u0007",
    "_\u0002\u0002v\u0016\u0003\u0002\u0002\u0002wx\u0007t\u0002\u0002xy",
    "\u0007g\u0002\u0002yz\u0007v\u0002\u0002z\u0018\u0003\u0002\u0002\u0002",
    "{|\u0007k\u0002\u0002|}\u0007h\u0002\u0002}\u001a\u0003\u0002\u0002",
    "\u0002~\u007f\u0007g\u0002\u0002\u007f\u0080\u0007n\u0002\u0002\u0080",
    "\u0081\u0007u\u0002\u0002\u0081\u0082\u0007g\u0002\u0002\u0082\u001c",
    "\u0003\u0002\u0002\u0002\u0083\u0084\u0007y\u0002\u0002\u0084\u0085",
    "\u0007j\u0002\u0002\u0085\u0086\u0007k\u0002\u0002\u0086\u0087\u0007",
    "n\u0002\u0002\u0087\u0088\u0007g\u0002\u0002\u0088\u001e\u0003\u0002",
    "\u0002\u0002\u0089\u008a\u0007}\u0002\u0002\u008a \u0003\u0002\u0002",
    "\u0002\u008b\u008c\u0007\u007f\u0002\u0002\u008c\"\u0003\u0002\u0002",
    "\u0002\u008d\u008e\u0007<\u0002\u0002\u008e$\u0003\u0002\u0002\u0002",
    "\u008f\u0090\u0007v\u0002\u0002\u0090\u0091\u0007t\u0002\u0002\u0091",
    "\u0092\u0007w\u0002\u0002\u0092\u0093\u0007g\u0002\u0002\u0093&\u0003",
    "\u0002\u0002\u0002\u0094\u0095\u0007h\u0002\u0002\u0095\u0096\u0007",
    "c\u0002\u0002\u0096\u0097\u0007n\u0002\u0002\u0097\u0098\u0007u\u0002",
    "\u0002\u0098\u0099\u0007g\u0002\u0002\u0099(\u0003\u0002\u0002\u0002",
    "\u009a\u009b\u0007p\u0002\u0002\u009b\u009c\u0007w\u0002\u0002\u009c",
    "\u009d\u0007n\u0002\u0002\u009d\u009e\u0007n\u0002\u0002\u009e*\u0003",
    "\u0002\u0002\u0002\u009f\u00a0\u0007`\u0002\u0002\u00a0,\u0003\u0002",
    "\u0002\u0002\u00a1\u00a2\u0007,\u0002\u0002\u00a2.\u0003\u0002\u0002",
    "\u0002\u00a3\u00a4\u00071\u0002\u0002\u00a40\u0003\u0002\u0002\u0002",
    "\u00a5\u00a6\u0007\'\u0002\u0002\u00a62\u0003\u0002\u0002\u0002\u00a7",
    "\u00a8\u0007-\u0002\u0002\u00a84\u0003\u0002\u0002\u0002\u00a9\u00aa",
    "\u0007/\u0002\u0002\u00aa6\u0003\u0002\u0002\u0002\u00ab\u00ac\u0007",
    "#\u0002\u0002\u00ac8\u0003\u0002\u0002\u0002\u00ad\u00ae\u0007?\u0002",
    "\u0002\u00ae\u00af\u0007?\u0002\u0002\u00af:\u0003\u0002\u0002\u0002",
    "\u00b0\u00b1\u0007#\u0002\u0002\u00b1\u00b2\u0007?\u0002\u0002\u00b2",
    "<\u0003\u0002\u0002\u0002\u00b3\u00b4\u0007>\u0002\u0002\u00b4>\u0003",
    "\u0002\u0002\u0002\u00b5\u00b6\u0007>\u0002\u0002\u00b6\u00b7\u0007",
    "?\u0002\u0002\u00b7@\u0003\u0002\u0002\u0002\u00b8\u00b9\u0007@\u0002",
    "\u0002\u00b9B\u0003\u0002\u0002\u0002\u00ba\u00bb\u0007@\u0002\u0002",
    "\u00bb\u00bc\u0007?\u0002\u0002\u00bcD\u0003\u0002\u0002\u0002\u00bd",
    "\u00be\u0007(\u0002\u0002\u00be\u00bf\u0007(\u0002\u0002\u00bfF\u0003",
    "\u0002\u0002\u0002\u00c0\u00c1\u0007~\u0002\u0002\u00c1\u00c2\u0007",
    "~\u0002\u0002\u00c2H\u0003\u0002\u0002\u0002\u00c3\u00c5\t\u0002\u0002",
    "\u0002\u00c4\u00c3\u0003\u0002\u0002\u0002\u00c5\u00c6\u0003\u0002\u0002",
    "\u0002\u00c6\u00c4\u0003\u0002\u0002\u0002\u00c6\u00c7\u0003\u0002\u0002",
    "\u0002\u00c7\u00cb\u0003\u0002\u0002\u0002\u00c8\u00ca\t\u0003\u0002",
    "\u0002\u00c9\u00c8\u0003\u0002\u0002\u0002\u00ca\u00cd\u0003\u0002\u0002",
    "\u0002\u00cb\u00c9\u0003\u0002\u0002\u0002\u00cb\u00cc\u0003\u0002\u0002",
    "\u0002\u00ccJ\u0003\u0002\u0002\u0002\u00cd\u00cb\u0003\u0002\u0002",
    "\u0002\u00ce\u00cf\u00071\u0002\u0002\u00cf\u00d0\u00071\u0002\u0002",
    "\u00d0\u00d4\u0003\u0002\u0002\u0002\u00d1\u00d3\n\u0004\u0002\u0002",
    "\u00d2\u00d1\u0003\u0002\u0002\u0002\u00d3\u00d6\u0003\u0002\u0002\u0002",
    "\u00d4\u00d2\u0003\u0002\u0002\u0002\u00d4\u00d5\u0003\u0002\u0002\u0002",
    "\u00d5\u00d7\u0003\u0002\u0002\u0002\u00d6\u00d4\u0003\u0002\u0002\u0002",
    "\u00d7\u00d8\u0007\f\u0002\u0002\u00d8\u00d9\u0003\u0002\u0002\u0002",
    "\u00d9\u00da\b&\u0002\u0002\u00daL\u0003\u0002\u0002\u0002\u00db\u00dd",
    "\t\u0005\u0002\u0002\u00dc\u00db\u0003\u0002\u0002\u0002\u00dd\u00de",
    "\u0003\u0002\u0002\u0002\u00de\u00dc\u0003\u0002\u0002\u0002\u00de\u00df",
    "\u0003\u0002\u0002\u0002\u00df\u00e0\u0003\u0002\u0002\u0002\u00e0\u00e1",
    "\b\'\u0002\u0002\u00e1N\u0003\u0002\u0002\u0002\u00e2\u00e7\u0007$\u0002",
    "\u0002\u00e3\u00e6\u0005Q)\u0002\u00e4\u00e6\n\u0006\u0002\u0002\u00e5",
    "\u00e3\u0003\u0002\u0002\u0002\u00e5\u00e4\u0003\u0002\u0002\u0002\u00e6",
    "\u00e9\u0003\u0002\u0002\u0002\u00e7\u00e5\u0003\u0002\u0002\u0002\u00e7",
    "\u00e8\u0003\u0002\u0002\u0002\u00e8\u00ea\u0003\u0002\u0002\u0002\u00e9",
    "\u00e7\u0003\u0002\u0002\u0002\u00ea\u00eb\u0007$\u0002\u0002\u00eb",
    "P\u0003\u0002\u0002\u0002\u00ec\u00ef\u0007^\u0002\u0002\u00ed\u00f0",
    "\t\u0007\u0002\u0002\u00ee\u00f0\u0005S*\u0002\u00ef\u00ed\u0003\u0002",
    "\u0002\u0002\u00ef\u00ee\u0003\u0002\u0002\u0002\u00f0R\u0003\u0002",
    "\u0002\u0002\u00f1\u00f2\u0007w\u0002\u0002\u00f2\u00f3\u0005U+\u0002",
    "\u00f3\u00f4\u0005U+\u0002\u00f4\u00f5\u0005U+\u0002\u00f5\u00f6\u0005",
    "U+\u0002\u00f6T\u0003\u0002\u0002\u0002\u00f7\u00f8\t\b\u0002\u0002",
    "\u00f8V\u0003\u0002\u0002\u0002\u00f9\u00fa\u0005Y-\u0002\u00fa\u00fc",
    "\u00070\u0002\u0002\u00fb\u00fd\t\t\u0002\u0002\u00fc\u00fb\u0003\u0002",
    "\u0002\u0002\u00fd\u00fe\u0003\u0002\u0002\u0002\u00fe\u00fc\u0003\u0002",
    "\u0002\u0002\u00fe\u00ff\u0003\u0002\u0002\u0002\u00ff\u0101\u0003\u0002",
    "\u0002\u0002\u0100\u0102\u0005[.\u0002\u0101\u0100\u0003\u0002\u0002",
    "\u0002\u0101\u0102\u0003\u0002\u0002\u0002\u0102\u0108\u0003\u0002\u0002",
    "\u0002\u0103\u0104\u0005Y-\u0002\u0104\u0105\u0005[.\u0002\u0105\u0108",
    "\u0003\u0002\u0002\u0002\u0106\u0108\u0005Y-\u0002\u0107\u00f9\u0003",
    "\u0002\u0002\u0002\u0107\u0103\u0003\u0002\u0002\u0002\u0107\u0106\u0003",
    "\u0002\u0002\u0002\u0108X\u0003\u0002\u0002\u0002\u0109\u0112\u0007",
    "2\u0002\u0002\u010a\u010e\t\n\u0002\u0002\u010b\u010d\t\t\u0002\u0002",
    "\u010c\u010b\u0003\u0002\u0002\u0002\u010d\u0110\u0003\u0002\u0002\u0002",
    "\u010e\u010c\u0003\u0002\u0002\u0002\u010e\u010f\u0003\u0002\u0002\u0002",
    "\u010f\u0112\u0003\u0002\u0002\u0002\u0110\u010e\u0003\u0002\u0002\u0002",
    "\u0111\u0109\u0003\u0002\u0002\u0002\u0111\u010a\u0003\u0002\u0002\u0002",
    "\u0112Z\u0003\u0002\u0002\u0002\u0113\u0114\t\u000b\u0002\u0002\u0114",
    "\u0115\u0005Y-\u0002\u0115\\\u0003\u0002\u0002\u0002\u000f\u0002\u00c6",
    "\u00cb\u00d4\u00de\u00e5\u00e7\u00ef\u00fe\u0101\u0107\u010e\u0111\u0003",
    "\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function SmackLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

SmackLexer.prototype = Object.create(antlr4.Lexer.prototype);
SmackLexer.prototype.constructor = SmackLexer;

SmackLexer.EOF = antlr4.Token.EOF;
SmackLexer.T__0 = 1;
SmackLexer.T__1 = 2;
SmackLexer.T__2 = 3;
SmackLexer.T__3 = 4;
SmackLexer.T__4 = 5;
SmackLexer.T__5 = 6;
SmackLexer.T__6 = 7;
SmackLexer.T__7 = 8;
SmackLexer.T__8 = 9;
SmackLexer.T__9 = 10;
SmackLexer.T__10 = 11;
SmackLexer.T__11 = 12;
SmackLexer.T__12 = 13;
SmackLexer.T__13 = 14;
SmackLexer.T__14 = 15;
SmackLexer.T__15 = 16;
SmackLexer.T__16 = 17;
SmackLexer.T__17 = 18;
SmackLexer.T__18 = 19;
SmackLexer.T__19 = 20;
SmackLexer.Pow = 21;
SmackLexer.Mul = 22;
SmackLexer.Div = 23;
SmackLexer.Mod = 24;
SmackLexer.Plus = 25;
SmackLexer.Minus = 26;
SmackLexer.Not = 27;
SmackLexer.Eq = 28;
SmackLexer.Neq = 29;
SmackLexer.Lt = 30;
SmackLexer.Le = 31;
SmackLexer.Gt = 32;
SmackLexer.Ge = 33;
SmackLexer.And = 34;
SmackLexer.Or = 35;
SmackLexer.Id = 36;
SmackLexer.Comment = 37;
SmackLexer.WS = 38;
SmackLexer.STRING = 39;
SmackLexer.NUMBER = 40;


SmackLexer.modeNames = [ "DEFAULT_MODE" ];

SmackLexer.literalNames = [ null, "'pack'", "';'", "'='", "'func'", "'('", 
                            "','", "')'", "'.'", "'['", "']'", "'ret'", 
                            "'if'", "'else'", "'while'", "'{'", "'}'", "':'", 
                            "'true'", "'false'", "'null'", "'^'", "'*'", 
                            "'/'", "'%'", "'+'", "'-'", "'!'", "'=='", "'!='", 
                            "'<'", "'<='", "'>'", "'>='", "'&&'", "'||'" ];

SmackLexer.symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, "Pow", "Mul", 
                             "Div", "Mod", "Plus", "Minus", "Not", "Eq", 
                             "Neq", "Lt", "Le", "Gt", "Ge", "And", "Or", 
                             "Id", "Comment", "WS", "STRING", "NUMBER" ];

SmackLexer.ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", 
                         "T__6", "T__7", "T__8", "T__9", "T__10", "T__11", 
                         "T__12", "T__13", "T__14", "T__15", "T__16", "T__17", 
                         "T__18", "T__19", "Pow", "Mul", "Div", "Mod", "Plus", 
                         "Minus", "Not", "Eq", "Neq", "Lt", "Le", "Gt", 
                         "Ge", "And", "Or", "Id", "Comment", "WS", "STRING", 
                         "ESC", "UNICODE", "HEX", "NUMBER", "INT", "EXP" ];

SmackLexer.grammarFileName = "Smack.g4";



exports.SmackLexer = SmackLexer;

