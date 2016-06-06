// Generated from ./Smack.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4');
var SmackListener = require('./SmackListener').SmackListener;
var SmackVisitor = require('./SmackVisitor').SmackVisitor;

var grammarFileName = "Smack.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003*\u0117\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0003\u0002\u0003\u0002\u0007\u00023\n\u0002\f\u0002",
    "\u000e\u00026\u000b\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0005\u0005D\n\u0005\u0003\u0005\u0003",
    "\u0005\u0007\u0005H\n\u0005\f\u0005\u000e\u0005K\u000b\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006",
    "S\n\u0006\u0003\u0006\u0003\u0006\u0007\u0006W\n\u0006\f\u0006\u000e",
    "\u0006Z\u000b\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007",
    "\u0007\u0007`\n\u0007\f\u0007\u000e\u0007c\u000b\u0007\u0003\b\u0003",
    "\b\u0003\b\u0007\bh\n\b\f\b\u000e\bk\u000b\b\u0003\t\u0003\t\u0003\t",
    "\u0003\t\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0007\u000bz\n\u000b\f\u000b\u000e",
    "\u000b}\u000b\u000b\u0003\u000b\u0005\u000b\u0080\n\u000b\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0005\u000f\u009c\n\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0006\u000f\u00ac\n\u000f\r\u000f\u000e\u000f",
    "\u00ad\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0007\u000f\u00c9\n\u000f\f\u000f\u000e\u000f\u00cc",
    "\u000b\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u00d1\n",
    "\u0010\u0003\u0011\u0003\u0011\u0007\u0011\u00d5\n\u0011\f\u0011\u000e",
    "\u0011\u00d8\u000b\u0011\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0005\u0012\u00e1\n\u0012\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0005\u0013\u00e6\n\u0013\u0003\u0014",
    "\u0003\u0014\u0005\u0014\u00ea\n\u0014\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0007\u0015\u00f0\n\u0015\f\u0015\u000e\u0015\u00f3",
    "\u000b\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0005\u0015",
    "\u00f9\n\u0015\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003",
    "\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0007\u0017\u0103\n\u0017",
    "\f\u0017\u000e\u0017\u0106\u000b\u0017\u0003\u0017\u0003\u0017\u0003",
    "\u0017\u0003\u0017\u0005\u0017\u010c\n\u0017\u0003\u0018\u0003\u0018",
    "\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0005\u0018",
    "\u0115\n\u0018\u0003\u0018\u0002\u0003\u001c\u0019\u0002\u0004\u0006",
    "\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*",
    ",.\u0002\u0003\u0003\u0002\u001b\u001c\u012b\u00020\u0003\u0002\u0002",
    "\u0002\u00047\u0003\u0002\u0002\u0002\u0006;\u0003\u0002\u0002\u0002",
    "\b?\u0003\u0002\u0002\u0002\nO\u0003\u0002\u0002\u0002\f]\u0003\u0002",
    "\u0002\u0002\u000ed\u0003\u0002\u0002\u0002\u0010l\u0003\u0002\u0002",
    "\u0002\u0012p\u0003\u0002\u0002\u0002\u0014s\u0003\u0002\u0002\u0002",
    "\u0016\u0081\u0003\u0002\u0002\u0002\u0018\u0088\u0003\u0002\u0002\u0002",
    "\u001a\u008b\u0003\u0002\u0002\u0002\u001c\u009b\u0003\u0002\u0002\u0002",
    "\u001e\u00d0\u0003\u0002\u0002\u0002 \u00d2\u0003\u0002\u0002\u0002",
    "\"\u00e0\u0003\u0002\u0002\u0002$\u00e5\u0003\u0002\u0002\u0002&\u00e9",
    "\u0003\u0002\u0002\u0002(\u00f8\u0003\u0002\u0002\u0002*\u00fa\u0003",
    "\u0002\u0002\u0002,\u010b\u0003\u0002\u0002\u0002.\u0114\u0003\u0002",
    "\u0002\u000204\u0005\u0004\u0003\u000213\u0005\b\u0005\u000221\u0003",
    "\u0002\u0002\u000236\u0003\u0002\u0002\u000242\u0003\u0002\u0002\u0002",
    "45\u0003\u0002\u0002\u00025\u0003\u0003\u0002\u0002\u000264\u0003\u0002",
    "\u0002\u000278\u0007\u0003\u0002\u000289\u0005\u000e\b\u00029:\u0007",
    "\u0004\u0002\u0002:\u0005\u0003\u0002\u0002\u0002;<\u0005\f\u0007\u0002",
    "<=\u0007\u0005\u0002\u0002=>\u0005\u001c\u000f\u0002>\u0007\u0003\u0002",
    "\u0002\u0002?@\u0007\u0006\u0002\u0002@A\u0007&\u0002\u0002AC\u0007",
    "\u0007\u0002\u0002BD\u0007&\u0002\u0002CB\u0003\u0002\u0002\u0002CD",
    "\u0003\u0002\u0002\u0002DI\u0003\u0002\u0002\u0002EF\u0007\b\u0002\u0002",
    "FH\u0007&\u0002\u0002GE\u0003\u0002\u0002\u0002HK\u0003\u0002\u0002",
    "\u0002IG\u0003\u0002\u0002\u0002IJ\u0003\u0002\u0002\u0002JL\u0003\u0002",
    "\u0002\u0002KI\u0003\u0002\u0002\u0002LM\u0007\t\u0002\u0002MN\u0005",
    " \u0011\u0002N\t\u0003\u0002\u0002\u0002OP\u0005\u000e\b\u0002PR\u0007",
    "\u0007\u0002\u0002QS\u0005\u001e\u0010\u0002RQ\u0003\u0002\u0002\u0002",
    "RS\u0003\u0002\u0002\u0002SX\u0003\u0002\u0002\u0002TU\u0007\b\u0002",
    "\u0002UW\u0005\u001e\u0010\u0002VT\u0003\u0002\u0002\u0002WZ\u0003\u0002",
    "\u0002\u0002XV\u0003\u0002\u0002\u0002XY\u0003\u0002\u0002\u0002Y[\u0003",
    "\u0002\u0002\u0002ZX\u0003\u0002\u0002\u0002[\\\u0007\t\u0002\u0002",
    "\\\u000b\u0003\u0002\u0002\u0002]a\u0007&\u0002\u0002^`\u0005\u0010",
    "\t\u0002_^\u0003\u0002\u0002\u0002`c\u0003\u0002\u0002\u0002a_\u0003",
    "\u0002\u0002\u0002ab\u0003\u0002\u0002\u0002b\r\u0003\u0002\u0002\u0002",
    "ca\u0003\u0002\u0002\u0002di\u0007&\u0002\u0002ef\u0007\n\u0002\u0002",
    "fh\u0007&\u0002\u0002ge\u0003\u0002\u0002\u0002hk\u0003\u0002\u0002",
    "\u0002ig\u0003\u0002\u0002\u0002ij\u0003\u0002\u0002\u0002j\u000f\u0003",
    "\u0002\u0002\u0002ki\u0003\u0002\u0002\u0002lm\u0007\u000b\u0002\u0002",
    "mn\u0005\u001e\u0010\u0002no\u0007\f\u0002\u0002o\u0011\u0003\u0002",
    "\u0002\u0002pq\u0007\r\u0002\u0002qr\u0005\u001c\u000f\u0002r\u0013",
    "\u0003\u0002\u0002\u0002st\u0007\u000e\u0002\u0002tu\u0007\u0007\u0002",
    "\u0002uv\u0005\u001c\u000f\u0002vw\u0007\t\u0002\u0002w{\u0005 \u0011",
    "\u0002xz\u0005\u0016\f\u0002yx\u0003\u0002\u0002\u0002z}\u0003\u0002",
    "\u0002\u0002{y\u0003\u0002\u0002\u0002{|\u0003\u0002\u0002\u0002|\u007f",
    "\u0003\u0002\u0002\u0002}{\u0003\u0002\u0002\u0002~\u0080\u0005\u0018",
    "\r\u0002\u007f~\u0003\u0002\u0002\u0002\u007f\u0080\u0003\u0002\u0002",
    "\u0002\u0080\u0015\u0003\u0002\u0002\u0002\u0081\u0082\u0007\u000f\u0002",
    "\u0002\u0082\u0083\u0007\u000e\u0002\u0002\u0083\u0084\u0007\u0007\u0002",
    "\u0002\u0084\u0085\u0005\u001c\u000f\u0002\u0085\u0086\u0007\t\u0002",
    "\u0002\u0086\u0087\u0005 \u0011\u0002\u0087\u0017\u0003\u0002\u0002",
    "\u0002\u0088\u0089\u0007\u000f\u0002\u0002\u0089\u008a\u0005 \u0011",
    "\u0002\u008a\u0019\u0003\u0002\u0002\u0002\u008b\u008c\u0007\u0010\u0002",
    "\u0002\u008c\u008d\u0007\u0007\u0002\u0002\u008d\u008e\u0005\u001c\u000f",
    "\u0002\u008e\u008f\u0007\t\u0002\u0002\u008f\u0090\u0005 \u0011\u0002",
    "\u0090\u001b\u0003\u0002\u0002\u0002\u0091\u0092\b\u000f\u0001\u0002",
    "\u0092\u0093\u0007\u0007\u0002\u0002\u0093\u0094\u0005\u001c\u000f\u0002",
    "\u0094\u0095\u0007\t\u0002\u0002\u0095\u009c\u0003\u0002\u0002\u0002",
    "\u0096\u0097\u0007\u001c\u0002\u0002\u0097\u009c\u0005\u001c\u000f\r",
    "\u0098\u0099\u0007\u001d\u0002\u0002\u0099\u009c\u0005\u001c\u000f\f",
    "\u009a\u009c\u0005\u001e\u0010\u0002\u009b\u0091\u0003\u0002\u0002\u0002",
    "\u009b\u0096\u0003\u0002\u0002\u0002\u009b\u0098\u0003\u0002\u0002\u0002",
    "\u009b\u009a\u0003\u0002\u0002\u0002\u009c\u00ca\u0003\u0002\u0002\u0002",
    "\u009d\u009e\f\u0012\u0002\u0002\u009e\u009f\u0007\u0017\u0002\u0002",
    "\u009f\u00c9\u0005\u001c\u000f\u0012\u00a0\u00a1\f\u0011\u0002\u0002",
    "\u00a1\u00a2\u0007\u0018\u0002\u0002\u00a2\u00c9\u0005\u001c\u000f\u0012",
    "\u00a3\u00a4\f\u0010\u0002\u0002\u00a4\u00a5\u0007\u0019\u0002\u0002",
    "\u00a5\u00c9\u0005\u001c\u000f\u0011\u00a6\u00a7\f\u000f\u0002\u0002",
    "\u00a7\u00a8\u0007\u001a\u0002\u0002\u00a8\u00c9\u0005\u001c\u000f\u0010",
    "\u00a9\u00ab\f\u000e\u0002\u0002\u00aa\u00ac\t\u0002\u0002\u0002\u00ab",
    "\u00aa\u0003\u0002\u0002\u0002\u00ac\u00ad\u0003\u0002\u0002\u0002\u00ad",
    "\u00ab\u0003\u0002\u0002\u0002\u00ad\u00ae\u0003\u0002\u0002\u0002\u00ae",
    "\u00af\u0003\u0002\u0002\u0002\u00af\u00c9\u0005\u001c\u000f\u000f\u00b0",
    "\u00b1\f\u000b\u0002\u0002\u00b1\u00b2\u0007\u001e\u0002\u0002\u00b2",
    "\u00c9\u0005\u001c\u000f\f\u00b3\u00b4\f\n\u0002\u0002\u00b4\u00b5\u0007",
    "\u001f\u0002\u0002\u00b5\u00c9\u0005\u001c\u000f\u000b\u00b6\u00b7\f",
    "\t\u0002\u0002\u00b7\u00b8\u0007 \u0002\u0002\u00b8\u00c9\u0005\u001c",
    "\u000f\n\u00b9\u00ba\f\b\u0002\u0002\u00ba\u00bb\u0007!\u0002\u0002",
    "\u00bb\u00c9\u0005\u001c\u000f\t\u00bc\u00bd\f\u0007\u0002\u0002\u00bd",
    "\u00be\u0007\"\u0002\u0002\u00be\u00c9\u0005\u001c\u000f\b\u00bf\u00c0",
    "\f\u0006\u0002\u0002\u00c0\u00c1\u0007#\u0002\u0002\u00c1\u00c9\u0005",
    "\u001c\u000f\u0007\u00c2\u00c3\f\u0005\u0002\u0002\u00c3\u00c4\u0007",
    "$\u0002\u0002\u00c4\u00c9\u0005\u001c\u000f\u0006\u00c5\u00c6\f\u0004",
    "\u0002\u0002\u00c6\u00c7\u0007%\u0002\u0002\u00c7\u00c9\u0005\u001c",
    "\u000f\u0005\u00c8\u009d\u0003\u0002\u0002\u0002\u00c8\u00a0\u0003\u0002",
    "\u0002\u0002\u00c8\u00a3\u0003\u0002\u0002\u0002\u00c8\u00a6\u0003\u0002",
    "\u0002\u0002\u00c8\u00a9\u0003\u0002\u0002\u0002\u00c8\u00b0\u0003\u0002",
    "\u0002\u0002\u00c8\u00b3\u0003\u0002\u0002\u0002\u00c8\u00b6\u0003\u0002",
    "\u0002\u0002\u00c8\u00b9\u0003\u0002\u0002\u0002\u00c8\u00bc\u0003\u0002",
    "\u0002\u0002\u00c8\u00bf\u0003\u0002\u0002\u0002\u00c8\u00c2\u0003\u0002",
    "\u0002\u0002\u00c8\u00c5\u0003\u0002\u0002\u0002\u00c9\u00cc\u0003\u0002",
    "\u0002\u0002\u00ca\u00c8\u0003\u0002\u0002\u0002\u00ca\u00cb\u0003\u0002",
    "\u0002\u0002\u00cb\u001d\u0003\u0002\u0002\u0002\u00cc\u00ca\u0003\u0002",
    "\u0002\u0002\u00cd\u00d1\u0005.\u0018\u0002\u00ce\u00d1\u0005\f\u0007",
    "\u0002\u00cf\u00d1\u0005\n\u0006\u0002\u00d0\u00cd\u0003\u0002\u0002",
    "\u0002\u00d0\u00ce\u0003\u0002\u0002\u0002\u00d0\u00cf\u0003\u0002\u0002",
    "\u0002\u00d1\u001f\u0003\u0002\u0002\u0002\u00d2\u00d6\u0007\u0011\u0002",
    "\u0002\u00d3\u00d5\u0005\"\u0012\u0002\u00d4\u00d3\u0003\u0002\u0002",
    "\u0002\u00d5\u00d8\u0003\u0002\u0002\u0002\u00d6\u00d4\u0003\u0002\u0002",
    "\u0002\u00d6\u00d7\u0003\u0002\u0002\u0002\u00d7\u00d9\u0003\u0002\u0002",
    "\u0002\u00d8\u00d6\u0003\u0002\u0002\u0002\u00d9\u00da\u0007\u0012\u0002",
    "\u0002\u00da!\u0003\u0002\u0002\u0002\u00db\u00dc\u0005$\u0013\u0002",
    "\u00dc\u00dd\u0007\u0004\u0002\u0002\u00dd\u00e1\u0003\u0002\u0002\u0002",
    "\u00de\u00e1\u0005\u001a\u000e\u0002\u00df\u00e1\u0005\u0014\u000b\u0002",
    "\u00e0\u00db\u0003\u0002\u0002\u0002\u00e0\u00de\u0003\u0002\u0002\u0002",
    "\u00e0\u00df\u0003\u0002\u0002\u0002\u00e1#\u0003\u0002\u0002\u0002",
    "\u00e2\u00e6\u0005\u0006\u0004\u0002\u00e3\u00e6\u0005\n\u0006\u0002",
    "\u00e4\u00e6\u0005\u0012\n\u0002\u00e5\u00e2\u0003\u0002\u0002\u0002",
    "\u00e5\u00e3\u0003\u0002\u0002\u0002\u00e5\u00e4\u0003\u0002\u0002\u0002",
    "\u00e6%\u0003\u0002\u0002\u0002\u00e7\u00ea\u0005(\u0015\u0002\u00e8",
    "\u00ea\u0005,\u0017\u0002\u00e9\u00e7\u0003\u0002\u0002\u0002\u00e9",
    "\u00e8\u0003\u0002\u0002\u0002\u00ea\'\u0003\u0002\u0002\u0002\u00eb",
    "\u00ec\u0007\u0011\u0002\u0002\u00ec\u00f1\u0005*\u0016\u0002\u00ed",
    "\u00ee\u0007\b\u0002\u0002\u00ee\u00f0\u0005*\u0016\u0002\u00ef\u00ed",
    "\u0003\u0002\u0002\u0002\u00f0\u00f3\u0003\u0002\u0002\u0002\u00f1\u00ef",
    "\u0003\u0002\u0002\u0002\u00f1\u00f2\u0003\u0002\u0002\u0002\u00f2\u00f4",
    "\u0003\u0002\u0002\u0002\u00f3\u00f1\u0003\u0002\u0002\u0002\u00f4\u00f5",
    "\u0007\u0012\u0002\u0002\u00f5\u00f9\u0003\u0002\u0002\u0002\u00f6\u00f7",
    "\u0007\u0011\u0002\u0002\u00f7\u00f9\u0007\u0012\u0002\u0002\u00f8\u00eb",
    "\u0003\u0002\u0002\u0002\u00f8\u00f6\u0003\u0002\u0002\u0002\u00f9)",
    "\u0003\u0002\u0002\u0002\u00fa\u00fb\u0007)\u0002\u0002\u00fb\u00fc",
    "\u0007\u0013\u0002\u0002\u00fc\u00fd\u0005.\u0018\u0002\u00fd+\u0003",
    "\u0002\u0002\u0002\u00fe\u00ff\u0007\u000b\u0002\u0002\u00ff\u0104\u0005",
    ".\u0018\u0002\u0100\u0101\u0007\b\u0002\u0002\u0101\u0103\u0005.\u0018",
    "\u0002\u0102\u0100\u0003\u0002\u0002\u0002\u0103\u0106\u0003\u0002\u0002",
    "\u0002\u0104\u0102\u0003\u0002\u0002\u0002\u0104\u0105\u0003\u0002\u0002",
    "\u0002\u0105\u0107\u0003\u0002\u0002\u0002\u0106\u0104\u0003\u0002\u0002",
    "\u0002\u0107\u0108\u0007\f\u0002\u0002\u0108\u010c\u0003\u0002\u0002",
    "\u0002\u0109\u010a\u0007\u000b\u0002\u0002\u010a\u010c\u0007\f\u0002",
    "\u0002\u010b\u00fe\u0003\u0002\u0002\u0002\u010b\u0109\u0003\u0002\u0002",
    "\u0002\u010c-\u0003\u0002\u0002\u0002\u010d\u0115\u0007)\u0002\u0002",
    "\u010e\u0115\u0007*\u0002\u0002\u010f\u0115\u0005(\u0015\u0002\u0110",
    "\u0115\u0005,\u0017\u0002\u0111\u0115\u0007\u0014\u0002\u0002\u0112",
    "\u0115\u0007\u0015\u0002\u0002\u0113\u0115\u0007\u0016\u0002\u0002\u0114",
    "\u010d\u0003\u0002\u0002\u0002\u0114\u010e\u0003\u0002\u0002\u0002\u0114",
    "\u010f\u0003\u0002\u0002\u0002\u0114\u0110\u0003\u0002\u0002\u0002\u0114",
    "\u0111\u0003\u0002\u0002\u0002\u0114\u0112\u0003\u0002\u0002\u0002\u0114",
    "\u0113\u0003\u0002\u0002\u0002\u0115/\u0003\u0002\u0002\u0002\u0019",
    "4CIRXai{\u007f\u009b\u00ad\u00c8\u00ca\u00d0\u00d6\u00e0\u00e5\u00e9",
    "\u00f1\u00f8\u0104\u010b\u0114"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'pack'", "';'", "'='", "'func'", "'('", "','", 
                     "')'", "'.'", "'['", "']'", "'ret'", "'if'", "'else'", 
                     "'while'", "'{'", "'}'", "':'", "'true'", "'false'", 
                     "'null'", "'^'", "'*'", "'/'", "'%'", "'+'", "'-'", 
                     "'!'", "'=='", "'!='", "'<'", "'<='", "'>'", "'>='", 
                     "'&&'", "'||'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, "Pow", "Mul", "Div", "Mod", "Plus", 
                      "Minus", "Not", "Eq", "Neq", "Lt", "Le", "Gt", "Ge", 
                      "And", "Or", "Id", "Comment", "WS", "STRING", "NUMBER" ];

var ruleNames =  [ "smkFile", "packageDecl", "varAssign", "funcDecl", "funcInvoke", 
                   "jsonPath", "dottedId", "keyRef", "retStatement", "ifStat", 
                   "elseIfStat", "elseStat", "loop", "expression", "resolvable", 
                   "codeBlock", "sentence", "statement", "json", "object", 
                   "pair", "array", "value" ];

function SmackParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

SmackParser.prototype = Object.create(antlr4.Parser.prototype);
SmackParser.prototype.constructor = SmackParser;

Object.defineProperty(SmackParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

SmackParser.EOF = antlr4.Token.EOF;
SmackParser.T__0 = 1;
SmackParser.T__1 = 2;
SmackParser.T__2 = 3;
SmackParser.T__3 = 4;
SmackParser.T__4 = 5;
SmackParser.T__5 = 6;
SmackParser.T__6 = 7;
SmackParser.T__7 = 8;
SmackParser.T__8 = 9;
SmackParser.T__9 = 10;
SmackParser.T__10 = 11;
SmackParser.T__11 = 12;
SmackParser.T__12 = 13;
SmackParser.T__13 = 14;
SmackParser.T__14 = 15;
SmackParser.T__15 = 16;
SmackParser.T__16 = 17;
SmackParser.T__17 = 18;
SmackParser.T__18 = 19;
SmackParser.T__19 = 20;
SmackParser.Pow = 21;
SmackParser.Mul = 22;
SmackParser.Div = 23;
SmackParser.Mod = 24;
SmackParser.Plus = 25;
SmackParser.Minus = 26;
SmackParser.Not = 27;
SmackParser.Eq = 28;
SmackParser.Neq = 29;
SmackParser.Lt = 30;
SmackParser.Le = 31;
SmackParser.Gt = 32;
SmackParser.Ge = 33;
SmackParser.And = 34;
SmackParser.Or = 35;
SmackParser.Id = 36;
SmackParser.Comment = 37;
SmackParser.WS = 38;
SmackParser.STRING = 39;
SmackParser.NUMBER = 40;

SmackParser.RULE_smkFile = 0;
SmackParser.RULE_packageDecl = 1;
SmackParser.RULE_varAssign = 2;
SmackParser.RULE_funcDecl = 3;
SmackParser.RULE_funcInvoke = 4;
SmackParser.RULE_jsonPath = 5;
SmackParser.RULE_dottedId = 6;
SmackParser.RULE_keyRef = 7;
SmackParser.RULE_retStatement = 8;
SmackParser.RULE_ifStat = 9;
SmackParser.RULE_elseIfStat = 10;
SmackParser.RULE_elseStat = 11;
SmackParser.RULE_loop = 12;
SmackParser.RULE_expression = 13;
SmackParser.RULE_resolvable = 14;
SmackParser.RULE_codeBlock = 15;
SmackParser.RULE_sentence = 16;
SmackParser.RULE_statement = 17;
SmackParser.RULE_json = 18;
SmackParser.RULE_object = 19;
SmackParser.RULE_pair = 20;
SmackParser.RULE_array = 21;
SmackParser.RULE_value = 22;

function SmkFileContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmackParser.RULE_smkFile;
    return this;
}

SmkFileContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SmkFileContext.prototype.constructor = SmkFileContext;

SmkFileContext.prototype.packageDecl = function() {
    return this.getTypedRuleContext(PackageDeclContext,0);
};

SmkFileContext.prototype.funcDecl = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FuncDeclContext);
    } else {
        return this.getTypedRuleContext(FuncDeclContext,i);
    }
};

SmkFileContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterSmkFile(this);
	}
};

SmkFileContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitSmkFile(this);
	}
};

SmkFileContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitSmkFile(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SmackParser.SmkFileContext = SmkFileContext;

SmackParser.prototype.smkFile = function() {

    var localctx = new SmkFileContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, SmackParser.RULE_smkFile);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 46;
        this.packageDecl();
        this.state = 50;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SmackParser.T__3) {
            this.state = 47;
            this.funcDecl();
            this.state = 52;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PackageDeclContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmackParser.RULE_packageDecl;
    return this;
}

PackageDeclContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PackageDeclContext.prototype.constructor = PackageDeclContext;

PackageDeclContext.prototype.dottedId = function() {
    return this.getTypedRuleContext(DottedIdContext,0);
};

PackageDeclContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterPackageDecl(this);
	}
};

PackageDeclContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitPackageDecl(this);
	}
};

PackageDeclContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitPackageDecl(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SmackParser.PackageDeclContext = PackageDeclContext;

SmackParser.prototype.packageDecl = function() {

    var localctx = new PackageDeclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, SmackParser.RULE_packageDecl);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 53;
        this.match(SmackParser.T__0);
        this.state = 54;
        this.dottedId();
        this.state = 55;
        this.match(SmackParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function VarAssignContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmackParser.RULE_varAssign;
    return this;
}

VarAssignContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VarAssignContext.prototype.constructor = VarAssignContext;

VarAssignContext.prototype.jsonPath = function() {
    return this.getTypedRuleContext(JsonPathContext,0);
};

VarAssignContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

VarAssignContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterVarAssign(this);
	}
};

VarAssignContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitVarAssign(this);
	}
};

VarAssignContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitVarAssign(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SmackParser.VarAssignContext = VarAssignContext;

SmackParser.prototype.varAssign = function() {

    var localctx = new VarAssignContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, SmackParser.RULE_varAssign);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 57;
        this.jsonPath();
        this.state = 58;
        this.match(SmackParser.T__2);
        this.state = 59;
        this.expression(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FuncDeclContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmackParser.RULE_funcDecl;
    return this;
}

FuncDeclContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FuncDeclContext.prototype.constructor = FuncDeclContext;

FuncDeclContext.prototype.Id = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SmackParser.Id);
    } else {
        return this.getToken(SmackParser.Id, i);
    }
};


FuncDeclContext.prototype.codeBlock = function() {
    return this.getTypedRuleContext(CodeBlockContext,0);
};

FuncDeclContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterFuncDecl(this);
	}
};

FuncDeclContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitFuncDecl(this);
	}
};

FuncDeclContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitFuncDecl(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SmackParser.FuncDeclContext = FuncDeclContext;

SmackParser.prototype.funcDecl = function() {

    var localctx = new FuncDeclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, SmackParser.RULE_funcDecl);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 61;
        this.match(SmackParser.T__3);
        this.state = 62;
        this.match(SmackParser.Id);
        this.state = 63;
        this.match(SmackParser.T__4);
        this.state = 65;
        _la = this._input.LA(1);
        if(_la===SmackParser.Id) {
            this.state = 64;
            this.match(SmackParser.Id);
        }

        this.state = 71;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SmackParser.T__5) {
            this.state = 67;
            this.match(SmackParser.T__5);
            this.state = 68;
            this.match(SmackParser.Id);
            this.state = 73;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 74;
        this.match(SmackParser.T__6);
        this.state = 75;
        this.codeBlock();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FuncInvokeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmackParser.RULE_funcInvoke;
    return this;
}

FuncInvokeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FuncInvokeContext.prototype.constructor = FuncInvokeContext;

FuncInvokeContext.prototype.dottedId = function() {
    return this.getTypedRuleContext(DottedIdContext,0);
};

FuncInvokeContext.prototype.resolvable = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ResolvableContext);
    } else {
        return this.getTypedRuleContext(ResolvableContext,i);
    }
};

FuncInvokeContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterFuncInvoke(this);
	}
};

FuncInvokeContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitFuncInvoke(this);
	}
};

FuncInvokeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitFuncInvoke(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SmackParser.FuncInvokeContext = FuncInvokeContext;

SmackParser.prototype.funcInvoke = function() {

    var localctx = new FuncInvokeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, SmackParser.RULE_funcInvoke);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 77;
        this.dottedId();
        this.state = 78;
        this.match(SmackParser.T__4);
        this.state = 80;
        _la = this._input.LA(1);
        if(((((_la - 9)) & ~0x1f) == 0 && ((1 << (_la - 9)) & ((1 << (SmackParser.T__8 - 9)) | (1 << (SmackParser.T__14 - 9)) | (1 << (SmackParser.T__17 - 9)) | (1 << (SmackParser.T__18 - 9)) | (1 << (SmackParser.T__19 - 9)) | (1 << (SmackParser.Id - 9)) | (1 << (SmackParser.STRING - 9)) | (1 << (SmackParser.NUMBER - 9)))) !== 0)) {
            this.state = 79;
            this.resolvable();
        }

        this.state = 86;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SmackParser.T__5) {
            this.state = 82;
            this.match(SmackParser.T__5);
            this.state = 83;
            this.resolvable();
            this.state = 88;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 89;
        this.match(SmackParser.T__6);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function JsonPathContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmackParser.RULE_jsonPath;
    return this;
}

JsonPathContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
JsonPathContext.prototype.constructor = JsonPathContext;

JsonPathContext.prototype.Id = function() {
    return this.getToken(SmackParser.Id, 0);
};

JsonPathContext.prototype.keyRef = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(KeyRefContext);
    } else {
        return this.getTypedRuleContext(KeyRefContext,i);
    }
};

JsonPathContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterJsonPath(this);
	}
};

JsonPathContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitJsonPath(this);
	}
};

JsonPathContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitJsonPath(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SmackParser.JsonPathContext = JsonPathContext;

SmackParser.prototype.jsonPath = function() {

    var localctx = new JsonPathContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, SmackParser.RULE_jsonPath);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 91;
        this.match(SmackParser.Id);
        this.state = 95;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 92;
                this.keyRef(); 
            }
            this.state = 97;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DottedIdContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmackParser.RULE_dottedId;
    return this;
}

DottedIdContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DottedIdContext.prototype.constructor = DottedIdContext;

DottedIdContext.prototype.Id = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SmackParser.Id);
    } else {
        return this.getToken(SmackParser.Id, i);
    }
};


DottedIdContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterDottedId(this);
	}
};

DottedIdContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitDottedId(this);
	}
};

DottedIdContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitDottedId(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SmackParser.DottedIdContext = DottedIdContext;

SmackParser.prototype.dottedId = function() {

    var localctx = new DottedIdContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, SmackParser.RULE_dottedId);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 98;
        this.match(SmackParser.Id);
        this.state = 103;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SmackParser.T__7) {
            this.state = 99;
            this.match(SmackParser.T__7);
            this.state = 100;
            this.match(SmackParser.Id);
            this.state = 105;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function KeyRefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmackParser.RULE_keyRef;
    return this;
}

KeyRefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
KeyRefContext.prototype.constructor = KeyRefContext;

KeyRefContext.prototype.resolvable = function() {
    return this.getTypedRuleContext(ResolvableContext,0);
};

KeyRefContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterKeyRef(this);
	}
};

KeyRefContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitKeyRef(this);
	}
};

KeyRefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitKeyRef(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SmackParser.KeyRefContext = KeyRefContext;

SmackParser.prototype.keyRef = function() {

    var localctx = new KeyRefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, SmackParser.RULE_keyRef);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 106;
        this.match(SmackParser.T__8);
        this.state = 107;
        this.resolvable();
        this.state = 108;
        this.match(SmackParser.T__9);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function RetStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmackParser.RULE_retStatement;
    return this;
}

RetStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RetStatementContext.prototype.constructor = RetStatementContext;

RetStatementContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

RetStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterRetStatement(this);
	}
};

RetStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitRetStatement(this);
	}
};

RetStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitRetStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SmackParser.RetStatementContext = RetStatementContext;

SmackParser.prototype.retStatement = function() {

    var localctx = new RetStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, SmackParser.RULE_retStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 110;
        this.match(SmackParser.T__10);
        this.state = 111;
        this.expression(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IfStatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmackParser.RULE_ifStat;
    return this;
}

IfStatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IfStatContext.prototype.constructor = IfStatContext;

IfStatContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

IfStatContext.prototype.codeBlock = function() {
    return this.getTypedRuleContext(CodeBlockContext,0);
};

IfStatContext.prototype.elseIfStat = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ElseIfStatContext);
    } else {
        return this.getTypedRuleContext(ElseIfStatContext,i);
    }
};

IfStatContext.prototype.elseStat = function() {
    return this.getTypedRuleContext(ElseStatContext,0);
};

IfStatContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterIfStat(this);
	}
};

IfStatContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitIfStat(this);
	}
};

IfStatContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitIfStat(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SmackParser.IfStatContext = IfStatContext;

SmackParser.prototype.ifStat = function() {

    var localctx = new IfStatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, SmackParser.RULE_ifStat);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 113;
        this.match(SmackParser.T__11);
        this.state = 114;
        this.match(SmackParser.T__4);
        this.state = 115;
        this.expression(0);
        this.state = 116;
        this.match(SmackParser.T__6);
        this.state = 117;
        this.codeBlock();
        this.state = 121;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 118;
                this.elseIfStat(); 
            }
            this.state = 123;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
        }

        this.state = 125;
        _la = this._input.LA(1);
        if(_la===SmackParser.T__12) {
            this.state = 124;
            this.elseStat();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ElseIfStatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmackParser.RULE_elseIfStat;
    return this;
}

ElseIfStatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElseIfStatContext.prototype.constructor = ElseIfStatContext;

ElseIfStatContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ElseIfStatContext.prototype.codeBlock = function() {
    return this.getTypedRuleContext(CodeBlockContext,0);
};

ElseIfStatContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterElseIfStat(this);
	}
};

ElseIfStatContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitElseIfStat(this);
	}
};

ElseIfStatContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitElseIfStat(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SmackParser.ElseIfStatContext = ElseIfStatContext;

SmackParser.prototype.elseIfStat = function() {

    var localctx = new ElseIfStatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, SmackParser.RULE_elseIfStat);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 127;
        this.match(SmackParser.T__12);
        this.state = 128;
        this.match(SmackParser.T__11);
        this.state = 129;
        this.match(SmackParser.T__4);
        this.state = 130;
        this.expression(0);
        this.state = 131;
        this.match(SmackParser.T__6);
        this.state = 132;
        this.codeBlock();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ElseStatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmackParser.RULE_elseStat;
    return this;
}

ElseStatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElseStatContext.prototype.constructor = ElseStatContext;

ElseStatContext.prototype.codeBlock = function() {
    return this.getTypedRuleContext(CodeBlockContext,0);
};

ElseStatContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterElseStat(this);
	}
};

ElseStatContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitElseStat(this);
	}
};

ElseStatContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitElseStat(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SmackParser.ElseStatContext = ElseStatContext;

SmackParser.prototype.elseStat = function() {

    var localctx = new ElseStatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, SmackParser.RULE_elseStat);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 134;
        this.match(SmackParser.T__12);
        this.state = 135;
        this.codeBlock();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LoopContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmackParser.RULE_loop;
    return this;
}

LoopContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LoopContext.prototype.constructor = LoopContext;

LoopContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

LoopContext.prototype.codeBlock = function() {
    return this.getTypedRuleContext(CodeBlockContext,0);
};

LoopContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterLoop(this);
	}
};

LoopContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitLoop(this);
	}
};

LoopContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitLoop(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SmackParser.LoopContext = LoopContext;

SmackParser.prototype.loop = function() {

    var localctx = new LoopContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, SmackParser.RULE_loop);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 137;
        this.match(SmackParser.T__13);
        this.state = 138;
        this.match(SmackParser.T__4);
        this.state = 139;
        this.expression(0);
        this.state = 140;
        this.match(SmackParser.T__6);
        this.state = 141;
        this.codeBlock();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmackParser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;


 
ExpressionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function SignedExprContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SignedExprContext.prototype = Object.create(ExpressionContext.prototype);
SignedExprContext.prototype.constructor = SignedExprContext;

SmackParser.SignedExprContext = SignedExprContext;

SignedExprContext.prototype.Minus = function() {
    return this.getToken(SmackParser.Minus, 0);
};

SignedExprContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
SignedExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterSignedExpr(this);
	}
};

SignedExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitSignedExpr(this);
	}
};

SignedExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitSignedExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function GeExprContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

GeExprContext.prototype = Object.create(ExpressionContext.prototype);
GeExprContext.prototype.constructor = GeExprContext;

SmackParser.GeExprContext = GeExprContext;

GeExprContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

GeExprContext.prototype.Ge = function() {
    return this.getToken(SmackParser.Ge, 0);
};
GeExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterGeExpr(this);
	}
};

GeExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitGeExpr(this);
	}
};

GeExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitGeExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ModExprContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ModExprContext.prototype = Object.create(ExpressionContext.prototype);
ModExprContext.prototype.constructor = ModExprContext;

SmackParser.ModExprContext = ModExprContext;

ModExprContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ModExprContext.prototype.Mod = function() {
    return this.getToken(SmackParser.Mod, 0);
};
ModExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterModExpr(this);
	}
};

ModExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitModExpr(this);
	}
};

ModExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitModExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function GtExprContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

GtExprContext.prototype = Object.create(ExpressionContext.prototype);
GtExprContext.prototype.constructor = GtExprContext;

SmackParser.GtExprContext = GtExprContext;

GtExprContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

GtExprContext.prototype.Gt = function() {
    return this.getToken(SmackParser.Gt, 0);
};
GtExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterGtExpr(this);
	}
};

GtExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitGtExpr(this);
	}
};

GtExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitGtExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AtomExprContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AtomExprContext.prototype = Object.create(ExpressionContext.prototype);
AtomExprContext.prototype.constructor = AtomExprContext;

SmackParser.AtomExprContext = AtomExprContext;

AtomExprContext.prototype.resolvable = function() {
    return this.getTypedRuleContext(ResolvableContext,0);
};
AtomExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterAtomExpr(this);
	}
};

AtomExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitAtomExpr(this);
	}
};

AtomExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitAtomExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function OrExprContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

OrExprContext.prototype = Object.create(ExpressionContext.prototype);
OrExprContext.prototype.constructor = OrExprContext;

SmackParser.OrExprContext = OrExprContext;

OrExprContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

OrExprContext.prototype.Or = function() {
    return this.getToken(SmackParser.Or, 0);
};
OrExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterOrExpr(this);
	}
};

OrExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitOrExpr(this);
	}
};

OrExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitOrExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ParenExprContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ParenExprContext.prototype = Object.create(ExpressionContext.prototype);
ParenExprContext.prototype.constructor = ParenExprContext;

SmackParser.ParenExprContext = ParenExprContext;

ParenExprContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
ParenExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterParenExpr(this);
	}
};

ParenExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitParenExpr(this);
	}
};

ParenExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitParenExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function NeqExprContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NeqExprContext.prototype = Object.create(ExpressionContext.prototype);
NeqExprContext.prototype.constructor = NeqExprContext;

SmackParser.NeqExprContext = NeqExprContext;

NeqExprContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

NeqExprContext.prototype.Neq = function() {
    return this.getToken(SmackParser.Neq, 0);
};
NeqExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterNeqExpr(this);
	}
};

NeqExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitNeqExpr(this);
	}
};

NeqExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitNeqExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function EqExprContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EqExprContext.prototype = Object.create(ExpressionContext.prototype);
EqExprContext.prototype.constructor = EqExprContext;

SmackParser.EqExprContext = EqExprContext;

EqExprContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

EqExprContext.prototype.Eq = function() {
    return this.getToken(SmackParser.Eq, 0);
};
EqExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterEqExpr(this);
	}
};

EqExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitEqExpr(this);
	}
};

EqExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitEqExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function LtExprContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LtExprContext.prototype = Object.create(ExpressionContext.prototype);
LtExprContext.prototype.constructor = LtExprContext;

SmackParser.LtExprContext = LtExprContext;

LtExprContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

LtExprContext.prototype.Lt = function() {
    return this.getToken(SmackParser.Lt, 0);
};
LtExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterLtExpr(this);
	}
};

LtExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitLtExpr(this);
	}
};

LtExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitLtExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function NotExprContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NotExprContext.prototype = Object.create(ExpressionContext.prototype);
NotExprContext.prototype.constructor = NotExprContext;

SmackParser.NotExprContext = NotExprContext;

NotExprContext.prototype.Not = function() {
    return this.getToken(SmackParser.Not, 0);
};

NotExprContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
NotExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterNotExpr(this);
	}
};

NotExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitNotExpr(this);
	}
};

NotExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitNotExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function SumExprContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SumExprContext.prototype = Object.create(ExpressionContext.prototype);
SumExprContext.prototype.constructor = SumExprContext;

SmackParser.SumExprContext = SumExprContext;

SumExprContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

SumExprContext.prototype.Plus = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SmackParser.Plus);
    } else {
        return this.getToken(SmackParser.Plus, i);
    }
};


SumExprContext.prototype.Minus = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SmackParser.Minus);
    } else {
        return this.getToken(SmackParser.Minus, i);
    }
};

SumExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterSumExpr(this);
	}
};

SumExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitSumExpr(this);
	}
};

SumExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitSumExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function LeExprContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LeExprContext.prototype = Object.create(ExpressionContext.prototype);
LeExprContext.prototype.constructor = LeExprContext;

SmackParser.LeExprContext = LeExprContext;

LeExprContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

LeExprContext.prototype.Le = function() {
    return this.getToken(SmackParser.Le, 0);
};
LeExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterLeExpr(this);
	}
};

LeExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitLeExpr(this);
	}
};

LeExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitLeExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function MulExprContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MulExprContext.prototype = Object.create(ExpressionContext.prototype);
MulExprContext.prototype.constructor = MulExprContext;

SmackParser.MulExprContext = MulExprContext;

MulExprContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

MulExprContext.prototype.Mul = function() {
    return this.getToken(SmackParser.Mul, 0);
};
MulExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterMulExpr(this);
	}
};

MulExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitMulExpr(this);
	}
};

MulExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitMulExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function DivExprContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DivExprContext.prototype = Object.create(ExpressionContext.prototype);
DivExprContext.prototype.constructor = DivExprContext;

SmackParser.DivExprContext = DivExprContext;

DivExprContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

DivExprContext.prototype.Div = function() {
    return this.getToken(SmackParser.Div, 0);
};
DivExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterDivExpr(this);
	}
};

DivExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitDivExpr(this);
	}
};

DivExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitDivExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function PowExprContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PowExprContext.prototype = Object.create(ExpressionContext.prototype);
PowExprContext.prototype.constructor = PowExprContext;

SmackParser.PowExprContext = PowExprContext;

PowExprContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

PowExprContext.prototype.Pow = function() {
    return this.getToken(SmackParser.Pow, 0);
};
PowExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterPowExpr(this);
	}
};

PowExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitPowExpr(this);
	}
};

PowExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitPowExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AndExprContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AndExprContext.prototype = Object.create(ExpressionContext.prototype);
AndExprContext.prototype.constructor = AndExprContext;

SmackParser.AndExprContext = AndExprContext;

AndExprContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

AndExprContext.prototype.And = function() {
    return this.getToken(SmackParser.And, 0);
};
AndExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterAndExpr(this);
	}
};

AndExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitAndExpr(this);
	}
};

AndExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitAndExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};



SmackParser.prototype.expression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 26;
    this.enterRecursionRule(localctx, 26, SmackParser.RULE_expression, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 153;
        switch(this._input.LA(1)) {
        case SmackParser.T__4:
            localctx = new ParenExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 144;
            this.match(SmackParser.T__4);
            this.state = 145;
            this.expression(0);
            this.state = 146;
            this.match(SmackParser.T__6);
            break;
        case SmackParser.Minus:
            localctx = new SignedExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 148;
            this.match(SmackParser.Minus);
            this.state = 149;
            this.expression(11);
            break;
        case SmackParser.Not:
            localctx = new NotExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 150;
            this.match(SmackParser.Not);
            this.state = 151;
            this.expression(10);
            break;
        case SmackParser.T__8:
        case SmackParser.T__14:
        case SmackParser.T__17:
        case SmackParser.T__18:
        case SmackParser.T__19:
        case SmackParser.Id:
        case SmackParser.STRING:
        case SmackParser.NUMBER:
            localctx = new AtomExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 152;
            this.resolvable();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 200;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,12,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 198;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new PowExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, SmackParser.RULE_expression);
                    this.state = 155;
                    if (!( this.precpred(this._ctx, 16))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 16)");
                    }
                    this.state = 156;
                    this.match(SmackParser.Pow);
                    this.state = 157;
                    this.expression(16);
                    break;

                case 2:
                    localctx = new MulExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, SmackParser.RULE_expression);
                    this.state = 158;
                    if (!( this.precpred(this._ctx, 15))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 15)");
                    }
                    this.state = 159;
                    this.match(SmackParser.Mul);
                    this.state = 160;
                    this.expression(16);
                    break;

                case 3:
                    localctx = new DivExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, SmackParser.RULE_expression);
                    this.state = 161;
                    if (!( this.precpred(this._ctx, 14))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
                    }
                    this.state = 162;
                    this.match(SmackParser.Div);
                    this.state = 163;
                    this.expression(15);
                    break;

                case 4:
                    localctx = new ModExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, SmackParser.RULE_expression);
                    this.state = 164;
                    if (!( this.precpred(this._ctx, 13))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
                    }
                    this.state = 165;
                    this.match(SmackParser.Mod);
                    this.state = 166;
                    this.expression(14);
                    break;

                case 5:
                    localctx = new SumExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, SmackParser.RULE_expression);
                    this.state = 167;
                    if (!( this.precpred(this._ctx, 12))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                    }
                    this.state = 169; 
                    this._errHandler.sync(this);
                    var _alt = 1;
                    do {
                    	switch (_alt) {
                    	case 1:
                    		this.state = 168;
                    		_la = this._input.LA(1);
                    		if(!(_la===SmackParser.Plus || _la===SmackParser.Minus)) {
                    		this._errHandler.recoverInline(this);
                    		}
                    		else {
                    		    this.consume();
                    		}
                    		break;
                    	default:
                    		throw new antlr4.error.NoViableAltException(this);
                    	}
                    	this.state = 171; 
                    	this._errHandler.sync(this);
                    	_alt = this._interp.adaptivePredict(this._input,10, this._ctx);
                    } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
                    this.state = 173;
                    this.expression(13);
                    break;

                case 6:
                    localctx = new EqExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, SmackParser.RULE_expression);
                    this.state = 174;
                    if (!( this.precpred(this._ctx, 9))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                    }
                    this.state = 175;
                    this.match(SmackParser.Eq);
                    this.state = 176;
                    this.expression(10);
                    break;

                case 7:
                    localctx = new NeqExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, SmackParser.RULE_expression);
                    this.state = 177;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 178;
                    this.match(SmackParser.Neq);
                    this.state = 179;
                    this.expression(9);
                    break;

                case 8:
                    localctx = new LtExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, SmackParser.RULE_expression);
                    this.state = 180;
                    if (!( this.precpred(this._ctx, 7))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                    }
                    this.state = 181;
                    this.match(SmackParser.Lt);
                    this.state = 182;
                    this.expression(8);
                    break;

                case 9:
                    localctx = new LeExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, SmackParser.RULE_expression);
                    this.state = 183;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 184;
                    this.match(SmackParser.Le);
                    this.state = 185;
                    this.expression(7);
                    break;

                case 10:
                    localctx = new GtExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, SmackParser.RULE_expression);
                    this.state = 186;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 187;
                    this.match(SmackParser.Gt);
                    this.state = 188;
                    this.expression(6);
                    break;

                case 11:
                    localctx = new GeExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, SmackParser.RULE_expression);
                    this.state = 189;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 190;
                    this.match(SmackParser.Ge);
                    this.state = 191;
                    this.expression(5);
                    break;

                case 12:
                    localctx = new AndExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, SmackParser.RULE_expression);
                    this.state = 192;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 193;
                    this.match(SmackParser.And);
                    this.state = 194;
                    this.expression(4);
                    break;

                case 13:
                    localctx = new OrExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, SmackParser.RULE_expression);
                    this.state = 195;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 196;
                    this.match(SmackParser.Or);
                    this.state = 197;
                    this.expression(3);
                    break;

                } 
            }
            this.state = 202;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,12,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function ResolvableContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmackParser.RULE_resolvable;
    return this;
}

ResolvableContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ResolvableContext.prototype.constructor = ResolvableContext;

ResolvableContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

ResolvableContext.prototype.jsonPath = function() {
    return this.getTypedRuleContext(JsonPathContext,0);
};

ResolvableContext.prototype.funcInvoke = function() {
    return this.getTypedRuleContext(FuncInvokeContext,0);
};

ResolvableContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterResolvable(this);
	}
};

ResolvableContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitResolvable(this);
	}
};

ResolvableContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitResolvable(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SmackParser.ResolvableContext = ResolvableContext;

SmackParser.prototype.resolvable = function() {

    var localctx = new ResolvableContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, SmackParser.RULE_resolvable);
    try {
        this.state = 206;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 203;
            this.value();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 204;
            this.jsonPath();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 205;
            this.funcInvoke();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CodeBlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmackParser.RULE_codeBlock;
    return this;
}

CodeBlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CodeBlockContext.prototype.constructor = CodeBlockContext;

CodeBlockContext.prototype.sentence = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SentenceContext);
    } else {
        return this.getTypedRuleContext(SentenceContext,i);
    }
};

CodeBlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterCodeBlock(this);
	}
};

CodeBlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitCodeBlock(this);
	}
};

CodeBlockContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitCodeBlock(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SmackParser.CodeBlockContext = CodeBlockContext;

SmackParser.prototype.codeBlock = function() {

    var localctx = new CodeBlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, SmackParser.RULE_codeBlock);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 208;
        this.match(SmackParser.T__14);
        this.state = 212;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 11)) & ~0x1f) == 0 && ((1 << (_la - 11)) & ((1 << (SmackParser.T__10 - 11)) | (1 << (SmackParser.T__11 - 11)) | (1 << (SmackParser.T__13 - 11)) | (1 << (SmackParser.Id - 11)))) !== 0)) {
            this.state = 209;
            this.sentence();
            this.state = 214;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 215;
        this.match(SmackParser.T__15);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SentenceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmackParser.RULE_sentence;
    return this;
}

SentenceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SentenceContext.prototype.constructor = SentenceContext;

SentenceContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};

SentenceContext.prototype.loop = function() {
    return this.getTypedRuleContext(LoopContext,0);
};

SentenceContext.prototype.ifStat = function() {
    return this.getTypedRuleContext(IfStatContext,0);
};

SentenceContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterSentence(this);
	}
};

SentenceContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitSentence(this);
	}
};

SentenceContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitSentence(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SmackParser.SentenceContext = SentenceContext;

SmackParser.prototype.sentence = function() {

    var localctx = new SentenceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, SmackParser.RULE_sentence);
    try {
        this.state = 222;
        switch(this._input.LA(1)) {
        case SmackParser.T__10:
        case SmackParser.Id:
            this.enterOuterAlt(localctx, 1);
            this.state = 217;
            this.statement();
            this.state = 218;
            this.match(SmackParser.T__1);
            break;
        case SmackParser.T__13:
            this.enterOuterAlt(localctx, 2);
            this.state = 220;
            this.loop();
            break;
        case SmackParser.T__11:
            this.enterOuterAlt(localctx, 3);
            this.state = 221;
            this.ifStat();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmackParser.RULE_statement;
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;

StatementContext.prototype.varAssign = function() {
    return this.getTypedRuleContext(VarAssignContext,0);
};

StatementContext.prototype.funcInvoke = function() {
    return this.getTypedRuleContext(FuncInvokeContext,0);
};

StatementContext.prototype.retStatement = function() {
    return this.getTypedRuleContext(RetStatementContext,0);
};

StatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterStatement(this);
	}
};

StatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitStatement(this);
	}
};

StatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SmackParser.StatementContext = StatementContext;

SmackParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, SmackParser.RULE_statement);
    try {
        this.state = 227;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 224;
            this.varAssign();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 225;
            this.funcInvoke();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 226;
            this.retStatement();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function JsonContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmackParser.RULE_json;
    return this;
}

JsonContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
JsonContext.prototype.constructor = JsonContext;

JsonContext.prototype.object = function() {
    return this.getTypedRuleContext(ObjectContext,0);
};

JsonContext.prototype.array = function() {
    return this.getTypedRuleContext(ArrayContext,0);
};

JsonContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterJson(this);
	}
};

JsonContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitJson(this);
	}
};

JsonContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitJson(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SmackParser.JsonContext = JsonContext;

SmackParser.prototype.json = function() {

    var localctx = new JsonContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, SmackParser.RULE_json);
    try {
        this.state = 231;
        switch(this._input.LA(1)) {
        case SmackParser.T__14:
            this.enterOuterAlt(localctx, 1);
            this.state = 229;
            this.object();
            break;
        case SmackParser.T__8:
            this.enterOuterAlt(localctx, 2);
            this.state = 230;
            this.array();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ObjectContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmackParser.RULE_object;
    return this;
}

ObjectContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ObjectContext.prototype.constructor = ObjectContext;

ObjectContext.prototype.pair = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PairContext);
    } else {
        return this.getTypedRuleContext(PairContext,i);
    }
};

ObjectContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterObject(this);
	}
};

ObjectContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitObject(this);
	}
};

ObjectContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitObject(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SmackParser.ObjectContext = ObjectContext;

SmackParser.prototype.object = function() {

    var localctx = new ObjectContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, SmackParser.RULE_object);
    var _la = 0; // Token type
    try {
        this.state = 246;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 233;
            this.match(SmackParser.T__14);
            this.state = 234;
            this.pair();
            this.state = 239;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===SmackParser.T__5) {
                this.state = 235;
                this.match(SmackParser.T__5);
                this.state = 236;
                this.pair();
                this.state = 241;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 242;
            this.match(SmackParser.T__15);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 244;
            this.match(SmackParser.T__14);
            this.state = 245;
            this.match(SmackParser.T__15);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PairContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmackParser.RULE_pair;
    return this;
}

PairContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PairContext.prototype.constructor = PairContext;

PairContext.prototype.STRING = function() {
    return this.getToken(SmackParser.STRING, 0);
};

PairContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

PairContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterPair(this);
	}
};

PairContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitPair(this);
	}
};

PairContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitPair(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SmackParser.PairContext = PairContext;

SmackParser.prototype.pair = function() {

    var localctx = new PairContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, SmackParser.RULE_pair);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 248;
        this.match(SmackParser.STRING);
        this.state = 249;
        this.match(SmackParser.T__16);
        this.state = 250;
        this.value();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ArrayContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmackParser.RULE_array;
    return this;
}

ArrayContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArrayContext.prototype.constructor = ArrayContext;

ArrayContext.prototype.value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValueContext);
    } else {
        return this.getTypedRuleContext(ValueContext,i);
    }
};

ArrayContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterArray(this);
	}
};

ArrayContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitArray(this);
	}
};

ArrayContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitArray(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SmackParser.ArrayContext = ArrayContext;

SmackParser.prototype.array = function() {

    var localctx = new ArrayContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, SmackParser.RULE_array);
    var _la = 0; // Token type
    try {
        this.state = 265;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 252;
            this.match(SmackParser.T__8);
            this.state = 253;
            this.value();
            this.state = 258;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===SmackParser.T__5) {
                this.state = 254;
                this.match(SmackParser.T__5);
                this.state = 255;
                this.value();
                this.state = 260;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 261;
            this.match(SmackParser.T__9);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 263;
            this.match(SmackParser.T__8);
            this.state = 264;
            this.match(SmackParser.T__9);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmackParser.RULE_value;
    return this;
}

ValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValueContext.prototype.constructor = ValueContext;

ValueContext.prototype.STRING = function() {
    return this.getToken(SmackParser.STRING, 0);
};

ValueContext.prototype.NUMBER = function() {
    return this.getToken(SmackParser.NUMBER, 0);
};

ValueContext.prototype.object = function() {
    return this.getTypedRuleContext(ObjectContext,0);
};

ValueContext.prototype.array = function() {
    return this.getTypedRuleContext(ArrayContext,0);
};

ValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterValue(this);
	}
};

ValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitValue(this);
	}
};

ValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SmackParser.ValueContext = ValueContext;

SmackParser.prototype.value = function() {

    var localctx = new ValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, SmackParser.RULE_value);
    try {
        this.state = 274;
        switch(this._input.LA(1)) {
        case SmackParser.STRING:
            this.enterOuterAlt(localctx, 1);
            this.state = 267;
            this.match(SmackParser.STRING);
            break;
        case SmackParser.NUMBER:
            this.enterOuterAlt(localctx, 2);
            this.state = 268;
            this.match(SmackParser.NUMBER);
            break;
        case SmackParser.T__14:
            this.enterOuterAlt(localctx, 3);
            this.state = 269;
            this.object();
            break;
        case SmackParser.T__8:
            this.enterOuterAlt(localctx, 4);
            this.state = 270;
            this.array();
            break;
        case SmackParser.T__17:
            this.enterOuterAlt(localctx, 5);
            this.state = 271;
            this.match(SmackParser.T__17);
            break;
        case SmackParser.T__18:
            this.enterOuterAlt(localctx, 6);
            this.state = 272;
            this.match(SmackParser.T__18);
            break;
        case SmackParser.T__19:
            this.enterOuterAlt(localctx, 7);
            this.state = 273;
            this.match(SmackParser.T__19);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


SmackParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 13:
			return this.expression_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

SmackParser.prototype.expression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 16);
		case 1:
			return this.precpred(this._ctx, 15);
		case 2:
			return this.precpred(this._ctx, 14);
		case 3:
			return this.precpred(this._ctx, 13);
		case 4:
			return this.precpred(this._ctx, 12);
		case 5:
			return this.precpred(this._ctx, 9);
		case 6:
			return this.precpred(this._ctx, 8);
		case 7:
			return this.precpred(this._ctx, 7);
		case 8:
			return this.precpred(this._ctx, 6);
		case 9:
			return this.precpred(this._ctx, 5);
		case 10:
			return this.precpred(this._ctx, 4);
		case 11:
			return this.precpred(this._ctx, 3);
		case 12:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.SmackParser = SmackParser;
