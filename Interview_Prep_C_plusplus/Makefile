CC = gcc
CFLAGS = -g -O2 -std=gnu99 -static -Wall -Wextra -Isrc -rdynamic -fomit-frame-pointer
all: $(patsubst %.c, %.out, $(wildcard *.c))
%.out: %.c Makefile
    $(CC) $(CFLAGS) $< -o $@ -lm
clean:
    rm *.out  