import unittest
from xml.etree import ElementTree
from aiwhiteboard_video_svg import render_title

class RenderTests(unittest.TestCase):
    def test_svg(self):
        svg = render_title("Hello")
        self.assertEqual(ElementTree.fromstring(svg).tag, "{http://www.w3.org/2000/svg}svg")

if __name__ == "__main__": unittest.main()
