// In order to *not* need this ignore, consider extracting the "web" version
// of your plugin as a separate package, instead of inlining it in the same
// package as the core of your plugin.
// ignore: avoid_web_libraries_in_flutter
@JS()
library apxor_flutterweb_plugin;

import 'dart:html' as html show window;
import 'dart:js' as js;
import 'package:js/js.dart';

import 'package:flutter/services.dart';

import 'dart:html' as html show window;

import 'package:flutter_web_plugins/flutter_web_plugins.dart';

import 'flutter_apxorweb_platform_interface.dart';

import 'dart:async';

import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter/foundation.dart';

@JS('window.Apxor.logEvent') // 'window' refers to the global window object in JavaScript
external void logEvent(String eventname, dynamic otherProperties);

@JS('window.Apxor.setUserId')
external void setUserId(String id);

@JS('window.Apxor.logClientEvent') // 'window' refers to the global window object in JavaScript
external void logClientEvent(String eventname, dynamic otherProperties);

@JS('window.Apxor.setUserProperties') // 'window' refers to the global window object in JavaScript
external void setUserProperties(dynamic info);

@JS('window.Apxor.setSessionProperties') // 'window' refers to the global window object in JavaScript
external void setSessionProperties(dynamic info);

@JS('window.Apxor.logPageView')
external void logPageView(String id);

@JS('window.Apxor.getClientId')
external void getClientId();

@JS('window.Apxor.startNewSession')
external void startNewSession();

@JS('window.Apxor.endSession')
external void endSession();

@JS('window.ApxorRTM.registerForClientEvents')
external void registerForClientEvents(dynamic obj);

@JS('window.ApxorRTM.markAsFlutter')
external void markAsFlutter();

var k1 = x([0x69, 0x64]);
var k2 = x([0x70, 0x61, 0x74, 0x68]);
var k3 = x([0x76, 0x69, 0x65, 0x77]);
var k4 = x([0x62, 0x6f, 0x75, 0x6e, 0x64, 0x73]);
var k5 = x([0x76, 0x69, 0x65, 0x77, 0x73]);
var k6 = x([0x74, 0x6f, 0x70]);
var k7 = x([0x62, 0x6f, 0x74, 0x74, 0x6f, 0x6d]);
var k8 = x([0x6c, 0x65, 0x66, 0x74]);
var k9 = x([0x72, 0x69, 0x67, 0x68, 0x74]);
dynamic x(dynamic r) {
  return const Utf8Decoder().convert(base64Decode(base64Encode(r)));
}

class LT {
  late Element e;
  Rect? po;
  String? p;
  String? op;
  String? k;
  late List<LT> c;

  LT();

  Map<String, dynamic> toJ(double d) {
    var a = [];
    for (var e in c) {
      a.add(e.toJ(d));
    }

    int t = 0, l = 0, r = 0, b = 0;
    if (po != null) {
      var w = (po!.top * d);
      var x = (po!.bottom * d);
      var y = (po!.left * d);
      var z = (po!.right * d);
      t = w.isNaN || w.isInfinite ? 0 : w.toInt();
      b = x.isNaN || x.isInfinite ? 0 : x.toInt();
      l = y.isNaN || y.isInfinite ? 0 : y.toInt();
      r = z.isNaN || z.isInfinite ? 0 : z.toInt();
    }

    return {
      k1: k != null && k!.isNotEmpty ? k : '',
      k2: op != null && op!.isNotEmpty ? op : '',
      k3: objectRuntimeType(e.widget, 'W'),
      k4: {k6: t, k7: b, k8: l, k9: r},
      k5: a
    };
  }

  @override
  String toString() {
    return "${objectRuntimeType(e.widget, 'W')} - ${c.length}";
  }
}

class RegisterForClientEvents {
  static bool _isValidString(String? str) {
    return str != null && str.isNotEmpty;
  }

  static bool _isV(Widget w) {
    bool v = true;
    if (w is Visibility) {
      v = w.visible;
    } else if (w is Offstage) {
      v = !w.offstage;
    } else if (w is Opacity) {
      v = w.opacity > 0;
    }
    return v;
  }

  static List _f(String p) {
    try {
      print("_f called");
      LT? t = _g(f: true, p: p);
      if (t != null && t.po != null) {
        Rect r = t.po!;
        return [
          r.top.toInt(),
          r.left.toInt(),
          r.right.toInt(),
          r.bottom.toInt()
        ];
      }
    } catch (e) {
      print("Error:: ${e.toString()}");
    }
    return [0, 0, 0, 0];
  }

  static LT? _g({bool f = false, String p = ""}) {
    print("_g called");
    var x = WidgetsBinding.instance.renderViewElement;
    List<LT> lts = <LT>[];
    LT lt = LT();
    lt.e = x!;
    lt.c = <LT>[];
    lts.add(lt);

    void _attel(LT n) {
      var element = n.e;
      if (element.widget.key is ValueKey) {
        var key = element.widget.key as ValueKey;
        n.k = key.value
            .toString()
            .replaceFirst("[<'", "")
            .replaceFirst("'>]", "")
            .replaceFirst("[<", "")
            .replaceFirst(">]", "");
      }
    }

    void _v(List<LT> ltList) {
      var i = 0;
      while (i < ltList.length) {
        LT ltn = ltList[i];
        RenderObject? obj = ltn.e.findRenderObject();
        // The Flutter screen stack contains all opened screens.
        // Tickermode indicates animation status (enabled or disabled).
        // We check the ticker mode of views to determine if they are on the
        // current screen.
        // Ticker mode is enabled for views on the current screen and disabled
        // for others in the stack.
        final isF = TickerMode.of(ltn.e);
        if (!isF) {
          // Views not on the current screen are removed.
          ltList.remove(ltn);
          continue;
        }

        if (obj != null && obj is RenderBox) {
          RenderBox b = ltn.e.findRenderObject() as RenderBox;
          if (!b.hasSize) {
            print("Error: No size for $b");
            return null;
          }
          Offset o;
          final s = ltn.e.findAncestorStateOfType<NavigatorState>();
          if (s != null) {
            o = b.localToGlobal(Offset.zero,
                ancestor: s.context.findRenderObject());
          } else {
            o = b.localToGlobal(Offset.zero);
          }
          ltn.po = Rect.fromLTRB(
              o.dx, o.dy, o.dx + b.size.width, o.dy + b.size.height);
        }
        List<LT> a = <LT>[];
        _attel(ltn);
        ltn.e.visitChildElements((element) {
          LT tmp = LT();
          tmp.e = element;
          if (_isV(element.widget)) {
            a.add(tmp);
          }
        });
        _v(a);
        ltn.c = a;
        i++;
      }
    }

    _v(lts);

    LT? _crtLt(List<LT> l, String s, String s1,
        {bool isF = false, String pstr = ""}) {
      var i = 0;
      while (i < l.length) {
        LT ltn = l[i];
        String r =
            "${l.length > 1 ? "[$i]" : ""}/${objectRuntimeType(ltn.e.widget, 'W')}";
        String op = "$s1$r";
        ltn.p = "${ltn.k != null ? ltn.k : s}$r";
        ltn.op = op;
        if (isF &&
            (ltn.p.toString() == pstr ||
                op == pstr ||
                (ltn.k != null && ltn.k == pstr))) {
          return ltn;
        }
        LT? t = _crtLt(ltn.c, ltn.p.toString(), op, isF: isF, pstr: pstr);
        if (isF && t != null) {
          return t;
        }
        i++;
      }
      return null;
    }

    LT _x(LT l, LT? pr) {
      var i = 0;
      if (l.k == null &&
          (l.e.runtimeType.toString().startsWith("_") || l.po == pr?.po)) {
        if (pr != null) {
          try {
            i = pr.c.indexOf(l);
            if (i != -1) {
              pr.c.removeAt(i);
              pr.c.addAll(l.c);
              l = pr;
            }
          } catch (e) {
            print("${e.toString()}");
            return pr;
          }
        }
      }

      while (i < l.c.length) {
        _x(l.c[i], l);
        i++;
      }

      return l;
    }

    LT xr = _x(lts[0], null);
    LT? tn = _crtLt([xr], "", "", isF: f, pstr: p);
    return f ? tn : xr;
  }

  void callback(dynamic event) {
    print("hello client event");
  }

  js.JsObject find(String p) {
    print("find called");
    List l = _f(p);
    //print(l);
    return js.JsObject.jsify({
      'r': {
        't': l[0],
        'l': l[1],
        'r': l[2],
        'b': l[3],
      }
    });
  }
}

/// A web implementation of the FlutterApxorwebPlatform of the FlutterApxorweb plugin.
class FlutterApxorwebWeb extends FlutterApxorwebPlatform {
  /// Constructs a FlutterApxorwebWeb
  FlutterApxorwebWeb();

  static void registerWith(Registrar registrar) {
    FlutterApxorwebPlatform.instance = FlutterApxorwebWeb();
    markAsFlutter();
    var helper = RegisterForClientEvents();
    registerForClientEvents(helper);
    js.context["findEle"] = helper.find;
    // helper.find("text-s").then((value) => print(value));
  }

  static void testwebsdk(String parameter) {
    // Your logic here
    print('Typed value is value: $parameter');
  }

  /// Returns a [String] containing the version of the platform.
  @override
  Future<String?> getPlatformVersion() async {
    final version = html.window.navigator.userAgent;
    return version;
  }
}
